# @mscharley/eslint-config

**Source:** [https://github.com/mscharley/node-presets](https://github.com/mscharley/node-presets)  
**Author:** Matthew Scharley  
**Contributors:** [See contributors on GitHub][gh-contrib]  
**Bugs/Support:** [Github Issues][gh-issues]  
**Copyright:** 2020  
**License:** [MIT license][license]  
**Status:** Active

## Synopsis

This is a preset for eslint for use with TypeScript projects.

## Installation

```console
$ npm install --save-dev @mscharley/eslint-config @mscharley/prettier-config
```

## Usage

```js
// .eslintrc.js
module.exports = {
  root: true,
  // If you only wish to lint JavaScript files you can extend '@mscharley/eslint-config/eslint' instead.
  extends: ['@mscharley'],
};
```

```jsonc
// .prettierrc
"@mscharley/prettier-config"
```

## Extras

### Deprecation warnings for JavaScript files

As a general rule we can't enable the `deprecation/deprecation` rule for JavaScript files because this rule requires TypeScript type information to work. If you have a mixed TypeScript/JavaScript project then you can enable it for the JavaScript files inside your TypeScript project using the following override:

```js
// .eslintrc.js
module.exports = {
  overrides: [
    {
      // This must be a valid path inside your TypeScript source folders.
      files: ["src/**/*.js", "src/**/*.jsx"],
      rules: { "deprecation/deprecation": "warn" },
    },
  ],
};
```

[gh-contrib]: https://github.com/mscharley/node-presets/graphs/contributors
[gh-issues]: https://github.com/mscharley/node-presets/issues
[license]: https://github.com/mscharley/node-presets/blob/master/LICENSE
