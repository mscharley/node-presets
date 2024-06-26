const { resolve } = require('path');

module.exports = {
	root: true,
	extends: ['@mscharley', '@mscharley/eslint-config/node'],
	parserOptions: {
		project: resolve(__dirname, './tsconfig.json'),
	},
};
