// Documentation for this file: https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 80,
  semi: true,
  endOfLine: 'lf',
  // Use single quotes instead of double quotes
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'consistent',
  // This requires a modern ECMAScript interpreter. We use TypeScript to transpile, set the
  // target there appropriately.
  trailingComma: 'all',
  arrowParens: 'always',
};
