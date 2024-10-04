const reverseString = require('./reverseString');

test('Reverse string "hello" to equal "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reverse string "Jest" to equal "tseJ"', () => {
  expect(reverseString('Anil')).toBe('linA');
});

test('Reverse string with empty string to be empty', () => {
  expect(reverseString('')).toBe('');
});
