function convertToRoman(num) {
  const obj = {
    0: ['M', 1000], 
    1: ['D', 500], 
    2: ['C', 100], 
    3: ['L', 50], 
    4: ['X', 10], 
    5: ['V', 5], 
    6: ['I', 1]
  };

  // Special cases for subtractive notation
  const special = [
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4]
  ];

  let result = "";

  // Handle special cases first
  for (let [sym, val] of special) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  // Handle normal numerals from obj
  for (let key in obj) {
    let [sym, val] = obj[key];
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  return result;
}

// Example test cases
// console.log(convertToRoman(14));  // XIV
// console.log(convertToRoman(798)); // DCCXCVIII

// do not edit below this line
module.exports = convertToRoman;
