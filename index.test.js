import { main } from './index.js';

test('should return "Hello, World!"', () => {
  expect(main()).toBe('Hello, World!');
});