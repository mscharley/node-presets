module.exports = {
	extends: ['plugin:n/recommended'],
	settings: {
		node: {
			tryExtensions: ['.js', '.jsx', '.json', '.node', '.d.ts', '.ts', '.tsx'],
		},
	},
	rules: {
		'n/no-sync': 'warn',
		'n/no-missing-import': 'off',
		'n/no-missing-require': 'off',
		'n/prefer-promises/dns': 'warn',
		'n/prefer-promises/fs': 'warn',
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			rules: {
				'n/no-unsupported-features/es-syntax': 'off',
			},
		},
	],
};
