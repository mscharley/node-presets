module.exports = {
	extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
	parser: 'espree',
	env: {
		commonjs: true,
		es6: true,
		es2017: true,
	},
	rules: {
		'import/first': ['warn'],
		'import/no-cycle': ['error', { ignoreExternal: true }],
		'import/no-duplicates': 'error',
		'import/no-useless-path-segments': ['warn'],
		'array-callback-return': 'error',
		'block-scoped-var': 'warn',
		'complexity': ['warn', { max: 20 }],
		'consistent-return': 'error',
		'curly': ['error', 'all'],
		'default-case': 'error',
		'default-param-last': 'error',
		'dot-notation': 'warn',
		'eqeqeq': ['error', 'always', { null: 'ignore' }],
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'warn',
		'no-alert': 'warn',
		'no-await-in-loop': 'error',
		'no-buffer-constructor': 'error',
		'no-console': 'warn',
		'no-duplicate-imports': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-fallthrough': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-lone-blocks': 'warn',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': [
			'warn',
			{
				enforceConst: false,
				ignore: [0, 1],
				ignoreArrayIndexes: true,
			},
		],
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-process-exit': 'warn',
		'no-proto': 'error',
		'no-prototype-builtins': 'warn',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'SequenceExpression',
				message: 'The comma operator is confusing and a common mistake. Don’t use it!',
			},
		],
		'no-return-assign': ['error', 'always'],
		'no-return-await': 'error',
		'no-self-compare': 'error',
		'no-shadow': 'error',
		'no-sync': 'error',
		'no-template-curly-in-string': 'warn',
		'no-throw-literal': 'error',
		'no-unexpected-multiline': 'error',
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': ['error', { allowAsStatement: true }],
		'no-warning-comments': 'warn',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-atomic-updates': 'warn',
		'require-await': 'error',
		'require-unicode-regexp': 'warn',
		'sort-imports': ['warn', { allowSeparatedGroups: true, ignoreCase: true }],
		'symbol-description': 'error',
	},
	settings: {
		'import/resolver': {
			typescript: true,
			node: true,
		},
	},
};
