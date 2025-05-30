import typescript, { disableTypeCheckedRules } from './typescript.js';
import eslint from './eslint.js';
import mpl2 from './mpl2.js';
import node from './node.js';
import react from './react.js';
import stylistic from '@stylistic/eslint-plugin';
import testing from './testing.js';

export const configs = {
	recommended: [
		{ linterOptions: { reportUnusedDisableDirectives: true } },
		...eslint,
		...typescript,
		...testing,
	],
	node,
	react,
	license: {
		'MPL-2.0': mpl2,
	},
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
			'@stylistic/max-len': ['error', {
				code: 120,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			}],
			'@stylistic/quote-props': ['error', 'consistent-as-needed'],
		},
	},
];

export { disableTypeCheckedRules };

export default { configs, disableTypeCheckedRules, withStyles };
