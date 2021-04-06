const assertArraysEqual = require('./assertArraysEqual');

//two parameters - array to work with, and the callback
const takeUntil = (array, callback) => {
  //return a "slice of the array with elements taken from the beginning"
  const results = []; //new array to fill values
  for (let element of array) {
    if (callback(element) === false) {
      results.push(element);
    } if (callback(element) === true) {
      break;
    }
  }
  return results;
};

//callback should only return one item
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);