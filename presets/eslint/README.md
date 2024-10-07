# @mscharley/eslint-config

**Source:** [https://github.com/mscharley/node-presets](https://github.com/mscharley/node-presets)  
**Author:** Matthew Scharley  
**Contributors:** [See contributors on GitHub][gh-contrib]  
**Bugs/Support:** [Github Issues][gh-issues]  
**License:** [MIT license][license]  
**Status:** Active

## Synopsis

This is a preset for eslint for use with TypeScript or JavaScript projects.

## Installation

```console
$ npm install --save-dev @mscharley/eslint-config
```

## Usage

```js
// eslint.config.js
import { configs, withStyles } from "@mscharley/eslint-config";

export const [
    ...configs.recommended,
    ...configs.node, // For projects running on NodeJS
    // ...configs.react, // For projects running React
    ...withStyles(), // Include formatting rules
];
```

### Notes on Prettier

If using Prettier to format files other than TypeScript and JavaScript files then you should ignore all TS/JS files to prevent ESLint and Prettier from fighting with each other.

```ignore
# .prettierignore
**/*.cts
**/*.mts
**/*.ts
**/*.cjs
**/*.mjs
**/*.js
```

[gh-contrib]: https://github.com/mscharley/node-presets/graphs/contributors
[gh-issues]: https://github.com/mscharley/node-presets/issues
[license]: https://github.com/mscharley/node-presets/blob/main/LICENSE
