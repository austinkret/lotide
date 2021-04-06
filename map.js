const assertArraysEqual = require('./assertArraysEqual');

//map will tkae in two arguments, array to map and a callback function
//return a new array based on results of callback function
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const newArray = map(words, word => word[0]);

module.exports = map;

assertArraysEqual(newArray, [ 'g', 'c', 't', 'm', 't' ]);
// Write test cases using at least three different ways of using map.








const numbers = [1, 5, 10, 57, 49, 52, 82, 5];
const resultsNumbers = map(numbers, number => number += 10);
assertArraysEqual(resultsNumbers, [11, 15, 20, 67, 59, 62, 92, 15]);

const family = ['Jeff', 'Mary', 'Frank', 'Jess'];
const lastName = map(family, name => name + ' Adams');
assertArraysEqual(lastName, ['Jeff Adams', 'Mary Adams', 'Frank Adams', 'Jess Adams']);

const pets = ['Archie', 'Jeter', 'Lo', 'Pep', 'Oskar'];
const petName = map(pets, name => name.length > 3);
assertArraysEqual(petName, [true, true, false, false, true]);