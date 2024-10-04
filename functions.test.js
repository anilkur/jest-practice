// functions.test.js
const functions = require('./functions');

test('adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });
  
  test('should be null', () => {
    expect(functions.isNull()).toBeNull();
  });
  