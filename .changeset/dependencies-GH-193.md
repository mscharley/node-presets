---
"@mscharley/eslint-config": major
---

Migrate ESLint to flat configurations.

BREAKING CHANGE: it will require migration work to update to this version. The migration to the new flat configuration format is fairly straightforward. The new rulesets are exported as `import('@mscharley/eslint-config').configs`. There is also a `withStyles()` function for enabling style linting for a project which was enabled by default previously. This doesn't currently take any options but may in the future to allow certain style parameters to be tweaked.
