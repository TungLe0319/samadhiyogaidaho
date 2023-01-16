import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
import { partytownVite } from "@builder.io/partytown/utils";
import path from "path";

export default defineConfig({
  plugins: [vue(), dynamicImport()],
  build: {
    plugins: [
      partytownVite({
        dest: path.join(__dirname, "dist", "~partytown"),
      }),
    ],
    outDir: "../samadhiyogaidaho/client",
    sourcemap: false,
  },
  server: {
    port: 8080,
  },
});
