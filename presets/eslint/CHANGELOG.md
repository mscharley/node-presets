# Change Log - @mscharley/eslint-config

## 4.0.0

### Major Changes

- 1720d57: Migrate ESLint to flat configurations.

  BREAKING CHANGE: it will require migration work to update to this version. The migration to the new flat configuration format is fairly straightforward. The new rulesets are exported as `import('@mscharley/eslint-config').configs`. There is also a `withStyles()` function for enabling style linting for a project which was enabled by default previously. This doesn't currently take any options but may in the future to allow certain style parameters to be tweaked.

  BREAKING CHANGE: Officially drop node 16 support.

### Patch Changes

- 8c70c28: fix(deps): update dependency eslint-plugin-react to ^7.36.0
- 8f4d995: fix(deps): update dependency eslint-plugin-react to ^7.36.1
- 31a13e3: fix(deps): update dependency eslint to ^8.57.1
- 99b0098: fix(deps): update dependency eslint-plugin-react to ^7.37.0
- 1f13a80: fix(deps): update dependency eslint-plugin-react to ^7.37.1
- abf5881: fix(deps): update dependency eslint-plugin-import to ^2.31.0
- 2ed1dfc: fix(deps): update eslint packages

## 3.1.5

### Patch Changes

- 64016d4: fix(deps): update typescript-eslint monorepo to ^7.9.0
- 08f4b1c: fix(deps): update typescript-eslint monorepo to ^7.10.0
- e092de8: fix(deps): update dependency eslint-plugin-react to ^7.34.2
- b718913: fix(deps): update typescript-eslint monorepo to ^7.11.0
- 7fa333b: fix(deps): update typescript-eslint monorepo to ^7.12.0
- 04544dc: fix(deps): update typescript-eslint monorepo to ^7.13.0
- a82107a: fix(deps): update dependency eslint-plugin-react to ^7.34.3
- 001ead1: fix(deps): update typescript-eslint monorepo to ^7.13.1
- 82c7dd3: fix(deps): update dependency typescript to v5.5.2
- 4831062: fix(deps): update typescript-eslint monorepo to ^7.14.1
- 9695744: fix(deps): update dependency typescript to v5.5.3
- e5c3af3: fix(deps): update typescript-eslint monorepo to ^7.15.0
- 3e0d059: fix(deps): update typescript-eslint monorepo to ^7.16.0
- 83a04ff: fix(deps): update dependency eslint-plugin-react to ^7.34.4
- 40611b6: fix(deps): update typescript-eslint monorepo to ^7.16.1
- 7506cb7: fix(deps): update dependency typescript to v5.5.4
- 496d3d2: fix(deps): update dependency eslint-plugin-react to ^7.35.0
- 66fc1a0: fix(deps): update typescript-eslint monorepo to ^7.17.0
- 798e9a6: fix(deps): update typescript-eslint monorepo to ^7.18.0
- 272c7bb: fix(deps): update dependency eslint-import-resolver-typescript to ^3.6.3
- 826b5be: fix(deps): update eslint packages
- d31f77b: fix(deps): update dependency typescript to v5.6.2

## 3.1.4

### Patch Changes

- 57e7303: fix(deps): update dependency eslint-plugin-react-hooks to ^4.6.2
- f73ca03: fix(deps): update dependency @stylistic/eslint-plugin to ^1.8.0
- 07d6174: fix(deps): update typescript-eslint monorepo to ^7.8.0
- 8c22aed: fix(deps): update dependency @stylistic/eslint-plugin to ^1.8.1

## 3.1.3

### Patch Changes

- 6e298f0: Migrate to `n/no-process-exit` instead of the deprecated `no-process-exit` rule
- 7d74015: fix(deps): update typescript-eslint monorepo to ^7.5.0
- 0951542: fix(deps): update dependency typescript to v5.4.4
- f39ccd3: fix(deps): update typescript-eslint monorepo to ^7.6.0
- 93bf6c6: fix(deps): update dependency typescript to v5.4.5
- c5c49af: fix(deps): update dependency @stylistic/eslint-plugin to ^1.7.2
- 71c43a3: fix(deps): update typescript-eslint monorepo to ^7.7.0
- 7aef700: fix(deps): update typescript-eslint monorepo to ^7.7.1
- c21caaa: fix(deps): update dependency eslint-plugin-react-hooks to ^4.6.1

## 3.1.2

### Patch Changes

- ada7204: fix(deps): update dependency eslint-plugin-n to v16
- 3f7617a: Don't use prettier for ts/js

## 3.1.1

### Patch Changes

- eb2ff9b: fix(deps): update typescript-eslint monorepo to ^7.1.0
- 65ca38c: fix(deps): update dependency eslint-plugin-react to ^7.34.0
- 03682c3: fix(deps): update typescript-eslint monorepo to ^7.1.1
- 45ab99e: fix(deps): update dependency typescript to v5.4.2
- ab01fe6: fix(deps): update typescript-eslint monorepo to ^7.2.0
- 11cf009: fix(deps): replace eslint packages
- 43822af: fix(deps): update typescript-eslint monorepo to ^7.3.1
- 6e751eb: fix(deps): update dependency typescript to v5.4.3
- f701198: fix(deps): update typescript-eslint monorepo to ^7.4.0
- aa48c87: Migrate to using the stylistic plugin for all style rules instead of the deprecated eslint rules
- Updated dependencies [aa48c87]
  - @mscharley/prettier-config@3.0.5

## 3.1.0

### Minor Changes

- 004f0af: Add support the Jest plugin in eslint

## 3.0.9

### Patch Changes

- d5a60cf: fix(deps): update typescript-eslint monorepo to ^7.0.2
- a2f02d9: fix(deps): update dependency eslint to v8.57.0

## 3.0.8

### Patch Changes

- badd377: fix(deps): update typescript-eslint monorepo to ^6.20.0
- d977e25: fix(deps): update dependency prettier to v3.2.5
- 1f2d2f5: fix(deps): update typescript-eslint monorepo to ^6.21.0
- 23355ab: fix(deps): update typescript-eslint monorepo to v7 (major)
- Updated dependencies [d977e25]
  - @mscharley/prettier-config@3.0.4

## 3.0.7

### Patch Changes

- aa4194b: fix(deps): update typescript-eslint monorepo to ^6.17.0
- 7dac3a6: fix(deps): update dependency eslint-plugin-prettier to v5.1.3
- b9199fa: fix(deps): update typescript-eslint monorepo to ^6.18.1
- ff55b78: fix(deps): update dependency prettier to v3.2.2
- 0a54f3e: fix(deps): update dependency prettier to v3.2.3
- 70ac146: fix(deps): update typescript-eslint monorepo to ^6.19.0
- 8d1acb3: fix(deps): update dependency prettier to v3.2.4
- 7381c77: fix(deps): update typescript-eslint monorepo to ^6.19.1
- Updated dependencies [ff55b78]
- Updated dependencies [0a54f3e]
- Updated dependencies [8d1acb3]
  - @mscharley/prettier-config@3.0.3

## 3.0.6

### Patch Changes

- 745840d: fix(deps): update dependency typescript to v5.3.3
- 4a8e208: fix(deps): update dependency prettier to v3.1.1
- 5c98fda: fix(deps): update typescript-eslint monorepo to ^6.14.0
- 8115dd7: fix(deps): update dependency eslint-plugin-import to ^2.29.1
- 0d837e9: fix(deps): update dependency eslint to v8.56.0
- e57dac6: fix(deps): update dependency eslint-plugin-prettier to v5.1.0
- 652b4dc: fix(deps): update typescript-eslint monorepo to ^6.15.0
- ab250d8: fix(deps): update dependency eslint-plugin-prettier to v5.1.1
- aebe30a: fix(deps): update dependency eslint-plugin-prettier to v5.1.2
- 59504c9: fix(deps): update typescript-eslint monorepo to ^6.16.0
- Updated dependencies [4a8e208]
  - @mscharley/prettier-config@3.0.2

## 3.0.5

### Patch Changes

- be36fd2: fix(deps): update typescript-eslint monorepo to ^6.13.2
- 23bbc18: fix(deps): update dependency eslint to v8.55.0
- 5c6b3c1: fix(deps): update dependency eslint-config-prettier to v9.1.0
- 602cfe6: fix(deps): update dependency typescript to v5.3.2
- 481321d: fix(deps): update typescript-eslint monorepo to ^6.12.0
- 790dcb2: fix(deps): update typescript-eslint monorepo to ^6.13.1

## 3.0.4

### Patch Changes

- e680f0d: fix(deps): update typescript-eslint monorepo to ^6.11.0
- 986fea7: fix(deps): update dependency eslint to v8.54.0

## 3.0.3

### Patch Changes

- ed58a50: fix(deps): update dependency prettier to v3.1.0
- Updated dependencies [ed58a50]
  - @mscharley/prettier-config@3.0.1

## 3.0.2

### Patch Changes

- 38bb58f: fix(deps): update typescript-eslint monorepo to ^6.9.1
- 4b2fe54: fix(deps): update dependency eslint to v8.53.0
- 0fd90e1: fix(deps): update typescript-eslint monorepo to ^6.10.0

## 3.0.1

### Patch Changes

- 5043068: fix(deps): update dependency eslint-plugin-import to ^2.29.0
- fea35d8: fix(deps): update typescript-eslint monorepo to ^6.9.0

## 3.0.0

### Major Changes

- 8c354c7: Drop node 14 support

### Patch Changes

- ac5cd32: fix(deps): update dependency typescript to ^5.2.2
- e6e4b30: fix(deps): update dependency eslint to ^8.51.0
- 786ed22: fix(deps): update dependency eslint-config-prettier to ^8.10.0
- 6ec9620: fix(deps): update typescript-eslint monorepo to v6 (major)
- 59b0e98: fix(deps): update dependency eslint to ^8.52.0
- 754d880: fix(deps): update dependency eslint-import-resolver-typescript to ^3.6.1
- 0b31c67: fix(deps): update dependency eslint-config-prettier to v9
- 2f2991d: fix(deps): update dependency eslint-plugin-deprecation to v2
- 84d02e8: fix(deps): update dependency eslint-plugin-prettier to v5
- f333841: fix(deps): update dependency prettier to v3
- 13f35df: fix(deps): update dependency eslint-plugin-import to ^2.28.1
- d0e36cf: fix(deps): update dependency eslint-plugin-react to ^7.33.2
- Updated dependencies [f333841]
- Updated dependencies [8c354c7]
  - @mscharley/prettier-config@3.0.0

This log was last generated on Sat, 21 Oct 2023 04:40:46 GMT and should not be manually modified.

## 2.0.5

Sat, 21 Oct 2023 04:40:46 GMT

_Version update only_

## 2.0.4

Sun, 02 Jul 2023 02:48:38 GMT

### Patches

- Fix ordering issues

## 2.0.3

Sun, 02 Jul 2023 02:43:53 GMT

### Patches

- Remove bad field value in package.json

## 2.0.2

Sun, 02 Jul 2023 02:35:52 GMT

### Patches

- Better support for esm projects

## 2.0.1

Mon, 20 Mar 2023 15:00:56 GMT

### Patches

- Bump to typescript 5.x

## 1.8.5

Wed, 14 Sep 2022 21:08:45 GMT

### Patches

- fix: updates

## 1.8.4

Fri, 18 Mar 2022 07:40:16 GMT

### Patches

- fix: bump dependency updates

## 1.8.3

Wed, 02 Mar 2022 01:14:53 GMT

### Patches

- fix: buggy testing rules

## 1.8.2

Wed, 02 Mar 2022 01:05:01 GMT

### Patches

- fix: dependencies

## 1.8.1

Wed, 02 Mar 2022 00:53:04 GMT

### Patches

- fix: add required package dependencies

## 1.8.0

Wed, 02 Mar 2022 00:45:39 GMT

### Minor changes

- feat: add support for linting react apps

## 1.7.1

Tue, 25 Jan 2022 14:41:46 GMT

_Version update only_

## 1.7.0

Fri, 10 Dec 2021 13:24:54 GMT

### Minor changes

- feat: bump to typescript-eslint 5.x

### Patches

- fix: add tests for styling and reasonings why

## 1.6.3

Thu, 16 Sep 2021 18:50:52 GMT

### Patches

- fix: also ignore unused args

## 1.6.2

Wed, 15 Sep 2021 12:36:38 GMT

### Patches

- fix(eslint): configure no-unused-vars

## 1.6.1

Wed, 15 Sep 2021 11:43:56 GMT

### Patches

- fix: dependency updates

## 1.6.0

Fri, 03 Sep 2021 15:47:23 GMT

### Minor changes

- fix: move dependencies into peerDependencies

## 1.5.3

Thu, 22 Jul 2021 08:07:44 GMT

### Patches

- fix: explicitly disable indent rule to prevent conflicts with prettier

## 1.5.2

Thu, 24 Jun 2021 06:27:07 GMT

### Patches

- fix: add typescript definitions as valid imports

## 1.5.1

Sun, 06 Jun 2021 10:12:59 GMT

### Patches

- fix(node): cleanup some issues with node/ts compatibility

## 1.5.0

Sun, 06 Jun 2021 09:28:52 GMT

### Minor changes

- feat(eslint): enable node specific rules

## 1.4.0

Thu, 13 May 2021 02:22:48 GMT

### Minor changes

- Enabled the @typescript-eslint/unbound-method eslint rule

## 1.3.9

Fri, 19 Mar 2021 01:16:16 GMT

### Patches

- fix: make sort-imports rule a warning

## 1.3.8

Thu, 11 Mar 2021 10:43:16 GMT

### Patches

- fix: make explicit-function-return-type a warning

## 1.3.7

Tue, 09 Mar 2021 03:51:43 GMT

### Patches

- fix: allow for importing just eslint settings

## 1.3.6

Mon, 08 Mar 2021 15:33:00 GMT

### Patches

- fix: allow linting top-level js config files

## 1.3.5

Mon, 08 Mar 2021 11:43:10 GMT

### Patches

- fix: allow void in some cases

## 1.3.4

Mon, 08 Mar 2021 11:15:51 GMT

### Patches

- fix: allow 0 and 1 as magic numbers

## 1.3.3

Mon, 08 Mar 2021 09:01:29 GMT

### Patches

- fix: add unions to no-type-alias too

## 1.3.2

Sat, 06 Mar 2021 03:48:39 GMT

### Patches

- fix: remove conflicting rule between eslint and prettier

## 1.3.1

Sat, 06 Mar 2021 03:03:15 GMT

### Patches

- chore: add funding info
- fix: disable prefer-readonly-parameter-types

## 1.3.0

Fri, 05 Mar 2021 09:21:17 GMT

### Minor changes

- feat: implement prettier support

## 1.2.9

Thu, 04 Mar 2021 07:56:18 GMT

### Patches

- chore: bump eslint dependencies

## 1.2.8

Thu, 04 Mar 2021 07:19:47 GMT

### Patches

- Bump to typescript 4.2

## 1.2.7

Mon, 18 Jan 2021 05:11:39 GMT

### Patches

- allow sorted imports to be split into blocks

## 1.2.6

Wed, 16 Dec 2020 07:15:14 GMT

### Patches

- fix: include deprecation warnings

## 1.2.5

Wed, 16 Dec 2020 04:09:07 GMT

### Patches

- fix(eslint): implement quotes rule

## 1.2.4

Thu, 23 Apr 2020 15:40:59 GMT

### Patches

- Add important documentation files to the package

## 1.2.3

Wed, 22 Apr 2020 12:37:11 GMT

### Patches

- Downgraded the eslint check for magic numbers to a warning

## 1.2.2

Wed, 22 Apr 2020 10:46:45 GMT

### Patches

- Fix an overbearing option from no-magic-numbers that forced _all_ variables that are numbers to be defined as consts

## 1.2.1

Wed, 22 Apr 2020 10:21:31 GMT

### Patches

- Better handling of issues caused by JavaScript's ASI engine

## 1.2.0

Wed, 22 Apr 2020 10:11:40 GMT

### Minor changes

- Fine tuned the eslint side of the settings

## 1.1.0

Wed, 22 Apr 2020 07:35:52 GMT

### Minor changes

- Added our initial configuration
