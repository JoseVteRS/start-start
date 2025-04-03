import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [tailwindcss()],
  css: {
    postcss: "./postcss.config.js",
  },
  publicDir: "./src/public",
});
