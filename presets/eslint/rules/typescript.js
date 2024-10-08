import { configs as tseslint } from 'typescript-eslint';

export const disableTypeCheckedRules = (...files) => ({
	files,
	...tseslint.disableTypeChecked,
	rules: {
		...tseslint.disableTypeChecked.rules,
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
});

/** @type import('eslint').Config[] */
export default [
	...tseslint.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/no-deprecated': 'warn',
			'@typescript-eslint/array-type': [
				'error',
				{
					default: 'array-simple',
					readonly: 'generic',
				},
			],
			'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
			'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
			'@typescript-eslint/consistent-type-assertions': [
				'warn',
				{
					assertionStyle: 'as',
					objectLiteralTypeAssertions: 'allow-as-parameter',
				},
			],
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{ prefer: 'type-imports', disallowTypeAnnotations: true },
			],
			'@typescript-eslint/explicit-function-return-type': [
				'warn',
				{
					allowConciseArrowFunctionExpressionsStartingWithVoid: true,
					allowDirectConstAssertionInArrowFunctions: false,
					allowExpressions: false,
					allowHigherOrderFunctions: true,
					allowTypedFunctionExpressions: true,
				},
			],
			'default-param-last': 'off',
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/explicit-member-accessibility': 'error',
			'@typescript-eslint/explicit-module-boundary-types': [
				'error',
				{
					allowArgumentsExplicitlyTypedAsAny: false,
					allowDirectConstAssertionInArrowFunctions: false,
					allowedNames: [],
					allowHigherOrderFunctions: true,
					allowTypedFunctionExpressions: true,
				},
			],
			'@typescript-eslint/indent': 'off',
			// '@typescript-eslint/member-delimiter-style': 'error',
			'@typescript-eslint/method-signature-style': ['error', 'property'],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-invalid-void-type': 'warn',
			'no-magic-numbers': 'off',
			'no-loop-func': 'off',
			'@typescript-eslint/no-loop-func': 'error',
			'@typescript-eslint/no-magic-numbers': [
				'warn',
				{
					enforceConst: false,
					ignore: [0, 1],
					ignoreArrayIndexes: true,
					ignoreEnums: true,
					ignoreNumericLiteralTypes: true,
				},
			],
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-type-alias': [
				'error',
				{
					allowAliases: 'in-unions-and-intersections',
					allowLiterals: 'in-unions-and-intersections',
					allowCallbacks: 'always',
					allowConditionalTypes: 'always',
					allowConstructors: 'always',
					allowMappedTypes: 'always',
					allowTupleTypes: 'always',
				},
			],
			'no-use-before-define': 'off',
			'@typescript-eslint/no-use-before-define': 'error',
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/unified-signatures': 'warn',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/ban-ts-comment': [
				'error',
				{
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': false,
					'ts-nocheck': false,
					'ts-check': true,
				},
			],
			'dot-notation': 'off',
			'@typescript-eslint/dot-notation': 'warn',
			'@typescript-eslint/no-base-to-string': 'error',
			'@typescript-eslint/no-floating-promises': [
				'error',
				{
					ignoreVoid: true,
					ignoreIIFE: false,
				},
			],
			'no-implied-eval': 'off',
			'@typescript-eslint/no-implied-eval': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
				'error',
				{
					allowComparingNullableBooleansToTrue: true,
					allowComparingNullableBooleansToFalse: true,
				},
			],
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/prefer-readonly': 'warn',
			'@typescript-eslint/prefer-reduce-type-parameter': 'warn',
			'@typescript-eslint/prefer-string-starts-ends-with': 'error',
			'@typescript-eslint/prefer-ts-expect-error': 'warn',
			'@typescript-eslint/promise-function-async': 'error',
			'require-await': 'off',
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/restrict-plus-operands': 'warn',
			'no-return-await': 'off',
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],
			'@typescript-eslint/strict-boolean-expressions': [
				'error',
				{
					allowString: false,
					allowNumber: false,
					allowNullableObject: false,
					allowNullableBoolean: false,
					allowNullableString: false,
					allowNullableNumber: false,
					allowAny: false,
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
				},
			],
			'@typescript-eslint/unbound-method': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
		},
	},
	disableTypeCheckedRules('*.config.js'),
];
