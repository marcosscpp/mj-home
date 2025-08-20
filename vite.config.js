import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "./",
  plugins: [],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
