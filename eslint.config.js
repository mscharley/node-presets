import { disableTypeCheckedRules, configs as mscharley, withStyles } from '@mscharley/eslint-config';

const c = [
	...mscharley.recommended,
	...withStyles(),
	{
		ignores: ['**/dist/**'],
	},
	disableTypeCheckedRules(
		// No global typescript project
		'*.js',
		// Most eslint plugins don't bother with typescript types which causes issues.
		'presets/eslint/rules/**/*.js',
		// Prettier doesn't have a typescript project
		'presets/prettier/**/*.js',
		// Disable for config files in the root of the commands
		'commands/*/*.js',
	),
];

export default c;
