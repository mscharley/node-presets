const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
	flat: false,
	indent: 'tab',
	quotes: 'single',
	semi: true,
	jsx: true,
	commaDangle: 'always-multiline',
	quoteProps: 'always',
	arrowParens: true,
	braceStyle: '1tbs',
});

module.exports = {
	plugins: ['@stylistic'],
	extends: ['plugin:@stylistic/disable-legacy'],
	rules: {
		...customized.rules,
		'@stylistic/generator-star-spacing': ['error', 'after'],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@stylistic/quotes': [
			'error',
			customized.rules['@stylistic/quotes'][1],
			{ avoidEscape: true, allowTemplateLiterals: false },
		],
		'@stylistic/quote-props': ['error', 'consistent-as-needed'],
	},
};
