module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', require('@mscharley/prettier-config')],
  },
};
