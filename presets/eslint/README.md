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
$ npm install --save-dev @mscharley/eslint-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-deprecation
```

## Usage

```js
// .eslintrc.js
module.exports = {
  extends: ['@mscharley'],
};
```

```jsonc
// .prettierrc
"@mscharley/prettier-config"
```

[gh-contrib]: https://github.com/mscharley/node-presets/graphs/contributors
[gh-issues]: https://github.com/mscharley/node-presets/issues
[license]: https://github.com/mscharley/node-presets/blob/master/LICENSE
