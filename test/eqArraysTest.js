const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, '4'], [1, 2, 3, '4']), true);
assertEqual(eqArrays([1, 2, 3, 5, 7], [1, 2, 3]), false);