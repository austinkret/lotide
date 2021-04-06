// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
//Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const value of keys1) {
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
      if (eqArrays(object1[value], object2[value]) === false) {
        return false;
      }
    } else if (object1[value] !== object2[value]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

