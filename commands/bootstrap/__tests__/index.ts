import { hello } from '../src/index';

test('hello returns a message', () => {
	expect(hello()).toBe('Hello world!');
});
