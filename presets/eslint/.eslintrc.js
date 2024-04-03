/* global __dirname */
const { resolve } = require('path');

module.exports = {
	extends: ['./index'],
	parserOptions: {
		project: resolve(__dirname, './tsconfig.json'),
	},
};
