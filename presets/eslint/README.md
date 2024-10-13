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

export default [
    ...configs.recommended,
    ...configs.node, // For projects running on NodeJS
    // ...configs.react, // For projects running React
    // ...configs.license["MPL-2.0"](), // Some licenses require notices in each source file, and some of these are predefined for convenience
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

### Usage in JavaScript projects

```
Parsing error: [...]/configFile.js was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject
```

If you get messages like this, you can disable type-checked rules using the `disableTypeCheckedRules()` helper function exported by this module. This takes a list of file paths and returns a single configuration object. This takes into account all type checked rules enabled by this configuration and is a superset of the helper configuration provided by `typescript-eslint` for a similar purpose.

[gh-contrib]: https://github.com/mscharley/node-presets/graphs/contributors
[gh-issues]: https://github.com/mscharley/node-presets/issues
[license]: https://github.com/mscharley/node-presets/blob/main/LICENSE
