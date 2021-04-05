const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns 2 for result.length", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"