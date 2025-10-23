import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXOpeningElement[name.name='svg']",
          message: "Use <Icon> from src/components/Icon instead of inline <svg> icons.",
        },
      ],
    },
  },
  {
    files: ["src/components/Icon.tsx"],
    rules: {
      "no-restricted-syntax": "off",
    },
  }
);
