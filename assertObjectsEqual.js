const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "4" });