const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns true for a: 1, b: 2 === b: 2, a: 1", () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns false for a: 1, b: 2 === a: 1, b: 2, c: 3", () => {
    const ab = {a: "1", b: "2"};
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("returns true for c: '1', d: ['2', 3] === d: ['2', 3], c: '1'", () => {
    const cd = { c: "1", d: ["2", 3]};
    const dc = { d: ["2", 3], c: "1"};
    assert.strictEqual(eqObjects(cd, dc), true);
  });
});