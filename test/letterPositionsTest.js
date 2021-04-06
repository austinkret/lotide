const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("returns [2, 3] for 'hello' when looking for the letter l", () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });
  
  it("returns [3, 5] for 'Lighthouse' when looking for the letter h", () => {
    assert.deepEqual(letterPositions('lighthouse').h, [3, 5]);
  });

  it("returns [3, 5] for 'supercalifragilisticexpialidocious' looking for the letter i", () => {
    assert.deepEqual(letterPositions('supercalifragilisticexpialidocious').i, [8, 13, 15, 18, 23, 26, 30]);
  });

});