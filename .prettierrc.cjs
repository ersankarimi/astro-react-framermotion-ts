/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/layouts",
    "^@ui/(.*)$",
    "^@/components",
    "@/hooks",
    "^@/utils",
    "^@/styles",
    "^@/pages",
    "^[./]",
  ],
  plugins: [
    "prettier-plugin-astro",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
