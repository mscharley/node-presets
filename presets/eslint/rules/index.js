import eslint from './eslint.js';
import node from './node.js';
import react from './react.js';
import stylistic from '@stylistic/eslint-plugin';
import testing from './testing.js';
import typescript from './typescript.js';

export const configs = {
	recommended: [
		{ linterOptions: { reportUnusedDisableDirectives: true } },
		...eslint,
		...typescript,
		...testing,
	],
	node,
	react,
};

export const withStyles = () => [
	stylistic.configs['disable-legacy'],
	stylistic.configs.customize({
		indent: 'tab',
		quotes: 'single',
		semi: true,
		jsx: true,
		commaDangle: 'always-multiline',
		quoteProps: 'always',
		arrowParens: true,
		braceStyle: '1tbs',
	}),
	{
		rules: {
			'@stylistic/generator-star-spacing': ['error', 'after'],
			'@stylistic/linebreak-style': ['error', 'unix'],
			'@stylistic/quote-props': ['error', 'consistent-as-needed'],
		},
	},
];

export default { configs, withStyles };
