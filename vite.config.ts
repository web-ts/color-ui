/// <reference types="vitest" />
/// <reference types="node" />

import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import sassDts from "vite-plugin-sass-dts";
import unocssPlugin from "unocss/vite";
import devtools from "solid-devtools/vite";

export default defineConfig({
  test: {
    include: ["./src/**/*.spec.ts", "./src/**/*.spec.tsx"],
    environment: "happy-dom",
  },
  plugins: [
    unocssPlugin(),
    devtools({
      autoname: true,
    }),
    solidPlugin(),
    sassDts(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib: {
      entry: "./src/index.tsx",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
