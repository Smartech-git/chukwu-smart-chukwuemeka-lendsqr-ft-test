import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    plugins: {
      import: (await import("eslint-plugin-import")).default,
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/no-children-prop": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "jsx-a11y/alt-text": "off",
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "**/*",
              from: "./*",
              message: "Avoid using './' for sibling imports. Use absolute imports with '@/' instead.",
            },
          ],
        },
      ],

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    files: ["./src/app/sanity/**/*.tsx"],
    rules: {
      "import/no-restricted-paths": "off",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
