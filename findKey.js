const assertEqual = require('./assertEqual');

//takes in object and callback X
//loop through object X
//return the first key where callback is truthy
//if not key found, return undefined
const findKey = (object, callback) => {
  const keys = Object.keys(object);
  for (let element of keys) {
    if (callback(object[element]) === true) {
      return element;
    }
  }
};

module.exports = findKey;

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let algor = x => x.stars === 2;
const results1 = findKey(data1, algor);

assertEqual(results1, "noma");

const data2 = {
  "Austin":   { beer: "Hazy IPA" },
  "Claire":   { beer: "White Bark" },
  "Kolina":   { beer: "Sour" },
  "Tyler":    { beer: "Lager" },
  "Alistair": { beer: "Pilsner" },
  "Sam":      { beer: "ABV 10% +" }
};
const results2 = findKey(data2, brand => brand.beer === "Pilsner");
assertEqual(results2, "Alistair");

const data3 = {
  "Natalie":  { pets: ["Jeter", "Fish"] },
  "Gavin":    { pets: ["Archie", "Allie"] },
  "Jaimie":   { pets: ["Pepper"] },
};
const results3 = findKey(data3, petList => petList.pets === ["Jonathan"]);
assertEqual(results3, undefined);