import { defineConfig } from "tsup";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig((options) => {
  return {
    ...options,
    outDir: "dist",
    entry: ["./src/index.ts"],
    splitting: true,
    format: "esm",
    sourcemap: false,
    clean: true,
    loader: {
      ".css": "text",
    },
    onSuccess: options.onSuccess,
  };
});
