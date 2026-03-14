import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          reactVendor: ["react", "react-dom", "react-router"],
          motionVendor: ["motion", "lenis"],
        },
      },
    },
  },
});
