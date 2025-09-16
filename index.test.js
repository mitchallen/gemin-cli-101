const { main } = require('./index');

test('should return "Hello, World!"', () => {
  expect(main()).toBe('Hello, World!');
});
