import jest from 'eslint-plugin-jest';

const jestFiles = [
	'**/__tests__/**/*.{ts,js,tsx,jsx}',
	'**/__mocks__/**/*.{ts,js,tsx,jsx}',
	'**/__utils__/**/*.{ts,js,tsx,jsx}',
];

export default [
	{
		// Viteshot support.
		files: ['**/*.screenshot.{jsx,tsx}'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
		},
	},
	// Jest support.
	{ files: jestFiles, ...jest.configs['flat/style'] },
	{ files: jestFiles, ...jest.configs['flat/recommended'] },
	{
		files: jestFiles,
		rules: {
			'@typescript-eslint/consistent-type-assertions': 'off',
			'@typescript-eslint/no-magic-numbers': 'off',
			'jest/prefer-todo': 'error',
			'jest/no-conditional-in-test': 'warn',
			'jest/no-untyped-mock-factory': 'error',
			'jest/prefer-called-with': 'error',
			'jest/prefer-comparison-matcher': 'warn',
			'jest/prefer-equality-matcher': 'warn',
			'jest/prefer-lowercase-title': 'error',
			'jest/prefer-expect-assertions': [
				'error',
				{ onlyFunctionsWithExpectInLoop: true, onlyFunctionsWithExpectInCallback: true },
			],
		},
	},
	{
		files: [
			'**/__mocks__/**/*.{ts,js,tsx,jsx}',
			'**/__utils__/**/*.{ts,js,tsx,jsx}',
		],
		rules: {
			'jest/no-export': 'off',
		},
	},
];
