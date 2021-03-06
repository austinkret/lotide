const middle = (array) => {
  let evenArray = [array[0] = array[Math.floor((array.length - 1) / 2)], array[1] = array[Math.floor((array.length) / 2)]];
  //if it's an even array, the first value should be middle -1, the second value should be middle +1, return two values
  let oddArray = [array[Math.floor((array.length) / 2)]];
  //if it's an odd array, return the value in the middle fo the array (array.length/2)
  let emptyArray = [];
  //an empty array variable
  if (array.length <= 2) {
    return emptyArray;
    //if there are 2 or less value sin the array, return empty
  } else if (array.length % 2 === 0) {
    return evenArray;
    //if the values can be devided equally by 2 (i.e. even), return evenArray
  } else if (array.length % 2 !== 0) {
    return oddArray;
    //if the values divided by two does not result in 0, return an odd array
  }
};

module.exports = middle;

//MY PSEUDOCODE :
//for an even array - return two values either side of middle
//for an odd array - return the middle value
//empty array should be empty array
//if the array is even - return the even array
//if the array is odd - return the odd array