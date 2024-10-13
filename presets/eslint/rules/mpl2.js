import notice from 'eslint-plugin-notice';

export default (...files) => [{
	plugins: { notice },
	files: files.length === 0 ? ['**/*.{ts,js,tsx,jsx}'] : files,
	rules: {
		'notice/notice': [
			'error',
			{
				template:
				'/**\n'
				+ ' * This Source Code Form is subject to the terms of the Mozilla Public\n'
				+ ' * License, v. 2.0. If a copy of the MPL was not distributed with this\n'
				+ ' * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n'
				+ ' */\n\n',
				// The package entrypoint needs some extra grace since the first comment must be the @packageDocumentation.
				chars: 5000,
			},
		],
	},
}];
