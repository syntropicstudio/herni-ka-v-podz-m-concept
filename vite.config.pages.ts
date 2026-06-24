// Vite config for GitHub Pages static SPA build.
// Run with: vite build --config vite.config.pages.ts
// Output: dist-pages/
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/herni-ka-v-podz-m-concept/",
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
});
