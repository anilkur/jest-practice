const factorial = require('./factorial');

test('Factorial of 5 should be 120', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial of 0 should be 1', () => {
  expect(factorial(0)).toBe(1);
});

test('Factorial of a negative number should return -1', () => {
  expect(factorial(-5)).toBe(-1);
});

test('Factorial of 3 should be 6', () => {
  expect(factorial(3)).toBe(6);
});
