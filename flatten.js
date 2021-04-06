const assertArraysEqual = require('./assertArraysEqual');

const flatten = (arrOne) => {
  let flatArray = [];
  arrOne.forEach(element => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  });
  return flatArray;
};

module.exports = flatten;

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], [2, 4, [6, 5,[5]]]])));