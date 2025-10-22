import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    ...options,
    outDir: "./",
    entry: ["./src/index.ts"],
    splitting: true,
    format: "esm",
    sourcemap: false,
    clean: false,
    loader: {
      ".css": "text",
    },
    onSuccess: options.onSuccess,
  };
});
