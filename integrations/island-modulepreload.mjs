import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Astro starts each client:only island with a runtime import(), so the browser
// finds the island's chunk first and its imports only after that arrives.
// After the build, add <link rel="modulepreload"> for every chunk an island
// statically needs, so they all download in parallel from the start.
export default function islandModulePreload() {
  return {
    name: "island-modulepreload",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const importsByChunk = new Map();

        // Static imports only (`from"./x.js"`, `import"./x.js"`); lazy import("./x.js") stays lazy
        const staticImports = (url) => {
          if (!importsByChunk.has(url)) {
            const file = path.join(outDir, url);
            const code = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
            const deps = [...code.matchAll(/(?:from|import)\s*["']\.\/([^"']+\.js)["']/g)].map(
              (m) => path.posix.join(path.posix.dirname(url), m[1]),
            );
            importsByChunk.set(url, deps);
          }
          return importsByChunk.get(url);
        };
        const collect = (url, seen) => {
          if (seen.has(url)) return;
          seen.add(url);
          staticImports(url).forEach((dep) => collect(dep, seen));
        };

        let pages = 0;
        for (const rel of fs.readdirSync(outDir, { recursive: true })) {
          if (!rel.endsWith(".html")) continue;
          const file = path.join(outDir, rel);
          const html = fs.readFileSync(file, "utf8");
          const entries = [...html.matchAll(/(?:component|renderer)-url="([^"]+)"/g)].map((m) => m[1]);
          if (!entries.length) continue;

          const chunks = new Set();
          entries.forEach((url) => collect(url, chunks));
          const links = [...chunks].map((url) => `<link rel="modulepreload" href="${url}">`).join("");
          fs.writeFileSync(file, html.replace("</head>", `${links}</head>`));
          pages++;
        }
        logger.info(`added modulepreload links to ${pages} pages`);
      },
    },
  };
}
