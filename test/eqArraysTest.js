const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for [1, 2, 3, '4'] === [1, 2, 3, '4']", () => {
    assert.deepEqual(eqArrays([1, 2, 3, '4'], [1, 2, 3, '4']), true);
  });

  it("returns false for [1, 2, 3, 5, 7], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3, 5, 7], [1, 2, 3]), false);
  });
});