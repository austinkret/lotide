const assertEqual = require('./assertEqual');

const findKeyByValue = (object, value) => {
//function findKeyByValue which takes in an object and a value.
  const keys = Object.keys(object);
  for (const subject of keys) {
    if (object[subject] === value) {
      return subject;
      //scan the object and return the first key which contains the given value.
    }
  }
};

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

/*MY PSEUDOCODE TO WORK THROUGH THE PROBLEM:
- Define the function findByKeyValue
- Two parameters: object and value
- Loop through the object
- Return the first key which equals the value we are searching for
*/