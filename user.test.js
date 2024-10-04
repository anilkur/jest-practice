const getUser = require('./user');

test('should return a user object', () => {
  expect(getUser()).toEqual({ name: 'Anil', age: 30 });
});
