import { configs as mscharley, withStyles } from '@mscharley/eslint-config';
import { configs as tseslint } from 'typescript-eslint';

const c = [
	...mscharley.recommended,
	...withStyles(),
	{
		ignores: ['**/dist/**'],
	},
	{
		files: [
			// No global typescript project
			'*.js',
			// Most eslint plugins don't bother with typescript types which causes issues.
			'presets/eslint/rules/**/*.js',
			// Prettier doesn't have a typescript project
			'presets/prettier/**/*.js',
			// Disable for config files in the root of the commands
			'commands/*/*.js',
		],
		...tseslint.disableTypeChecked,
	},
];

export default c;
