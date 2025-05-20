/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  importOrder: ['^astro.*$', '^react$', '<THIRD_PARTY_MODULES>', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-sort-json',
  ],
};

module.exports = config;
