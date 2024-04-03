const stylistic = require('@stylistic/eslint-plugin');

const prettierConfig = require('@mscharley/prettier-config');
const TAB_WIDTH = 2;
const customized = stylistic.configs.customize({
	flat: false,
	indent: prettierConfig.useTabs ? 'tab' : TAB_WIDTH,
	quotes: prettierConfig.singleQuote ? 'single' : 'double',
	semi: prettierConfig.semi,
	jsx: true,
	commaDangle: 'always-multiline',
	quoteProps: prettierConfig.quoteProps,
	arrowParens: prettierConfig.arrowParens === 'always',
	braceStyle: '1tbs',
});

module.exports = {
	plugins: ['@stylistic', 'prettier'],
	extends: ['plugin:@stylistic/disable-legacy'],
	rules: {
		'prettier/prettier': ['error', prettierConfig],
		...customized.rules,
		'@stylistic/generator-star-spacing': ['error', 'after'],
		'@stylistic/linebreak-style': ['error', prettierConfig.endOfLine === 'lf' ? 'unix' : 'windows'],
		'@stylistic/quotes': [
			'error',
			customized.rules['@stylistic/quotes'][1],
			{ avoidEscape: true, allowTemplateLiterals: false },
		],
	},
};
