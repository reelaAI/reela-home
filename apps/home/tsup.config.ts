import { defineConfig } from "tsup";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

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
    alias: {
      "lucide-react": resolve(__dirname, "src/lib/lucide-react.tsx"),
    },
    onSuccess: options.onSuccess,
  };
});
