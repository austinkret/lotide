const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
