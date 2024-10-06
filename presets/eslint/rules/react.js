import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
	reactHooks.configs.recommended,
	{
		rules: {
			'react/prefer-stateless-function': 'error',
			'react/prop-types': 'off',
		},
	},
];
