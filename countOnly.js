// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

//Process an array and an object
//return an object
//object should contain counts of everything that the input object listed
// only kjeys with a truthy value should be counted
//all other strings should NOT be counted
// if there is a key in the object that is truthy, but value is 0, do not return the value
// report back how many instances of each string were found in the allItems array of strings

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;


