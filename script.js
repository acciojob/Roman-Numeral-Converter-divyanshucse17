const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function toRoman(num) {
  if (num === 0) return "N"; // Romans used "N" (nulla) for zero

  const romans = [
    { value: 100000, symbol: "C̅" },   // 100,000
    { value: 90000, symbol: "X̅C̅" },  // 90,000
    { value: 50000, symbol: "L̅" },    // 50,000
    { value: 40000, symbol: "X̅L̅" },  // 40,000
    { value: 10000, symbol: "X̅" },    // 10,000
    { value: 9000, symbol: "I̅X̅" },   // 9,000
    { value: 5000, symbol: "V̅" },     // 5,000
    { value: 4000, symbol: "I̅V̅" },   // 4,000
    { value: 1000, symbol: "M" },      // 1,000
    { value: 900, symbol: "CM" },      // 900
    { value: 500, symbol: "D" },       // 500
    { value: 400, symbol: "CD" },      // 400
    { value: 100, symbol: "C" },       // 100
    { value: 90, symbol: "XC" },       // 90
    { value: 50, symbol: "L" },        // 50
    { value: 40, symbol: "XL" },       // 40
    { value: 10, symbol: "X" },        // 10
    { value: 9, symbol: "IX" },        // 9
    { value: 5, symbol: "V" },         // 5
    { value: 4, symbol: "IV" },        // 4
    { value: 1, symbol: "I" }          // 1
  ];

  let result = "";
  for (let { value, symbol } of romans) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// Take input from user
readline.question('', input => {
  const num = parseInt(input);

  if (isNaN(num) || num < 0 || num > 100000) {
    console.log("Invalid Input. Enter number between 0 and 100000.");
  } else {
    console.log(toRoman(num));
  }

  readline.close();
});
