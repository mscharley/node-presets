import n from 'eslint-plugin-n';

export default [
	n.configs['flat/recommended'],
	{
		settings: {
			node: {
				tryExtensions: ['.js', '.jsx', '.mjs', '.cjs', '.json', '.node', '.d.ts', '.ts', '.tsx', '.mts', '.cts'],
			},
		},
		rules: {
			'n/no-sync': 'warn',
			'n/no-missing-import': 'off',
			'n/no-missing-require': 'off',
			'n/prefer-promises/dns': 'warn',
			'n/prefer-promises/fs': 'warn',
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'n/no-unsupported-features/es-syntax': 'off',
		},
	},
];
