# Contribution guidelines

## Basic developer workflow tips

- [Rush documentation](https://rushjs.io/pages/developer/new_developer)
- Use `rush change` before pushing up a PR to ensure that your changes are documented in the changelog.

## Run package updates

```shell
rush check-updates
rush update --full
```

When adding new packages, ensure you create the check-updates script which runs the `npm-check-updates` script.
