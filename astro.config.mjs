import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.b-spoke.com.au",
  integrations: [react()],
  trailingSlash: "never",
  build: {
    // Emit about.html (served at /about) so URLs keep the no-trailing-slash form
    format: "file",
    // Keep bundles under /assets so the caching rules in public/_headers still apply
    assets: "assets",
  },
  server: {
    port: 5173,
    open: true,
  },
  vite: {
    plugins: [tailwindcss()],
    // Keep exposing VITE_API_BASE_URL etc. to client code
    envPrefix: ["PUBLIC_", "VITE_"],
    build: {
      rollupOptions: {
        output: {
          // Shared icons chunk. Without it, icons used only by the bathroom form land in
          // that page's chunk and Astro links bathroomSelection.css on every page.
          manualChunks(id) {
            if (id.includes("node_modules/lucide-react")) return "icons";
          },
        },
      },
    },
  },
});
