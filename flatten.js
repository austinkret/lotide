// const eqArrays = (arrOne, arrTwo) => {
//   if (arrOne.length === arrTwo.length) {
//     for (let i = 0; i < arrOne.length; i++) {
//       if (arrOne[i] !== arrTwo[i]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };

// const assertArraysEqual = (arrOne, arrTwo) => {
//   if (eqArrays(arrOne, arrTwo)) {
//     console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
//   }
// };

const flatten = (arrOne) => {
  let flatArray = [];
    arrOne.forEach(element => {
      if(Array.isArray(element)) {
        flatArray = flatArray.concat(flatten(element));
      } 
      else {
        flatArray.push(element);
      }
    });
    return flatArray;
  };

console.log(flatten([1, 2, [3, 4], 5, [6]]));