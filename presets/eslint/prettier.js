module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('@mscharley/prettier-config')],
  },
};
