const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function toRoman(num) {
  if (num === 0) return "N"; // Romans sometimes used N for zero

  const romans = [
    { value: 100000, symbol: "C̅" },
    { value: 90000, symbol: "X̅C̅" },
    { value: 50000, symbol: "L̅" },
    { value: 40000, symbol: "X̅L̅" },
    { value: 10000, symbol: "X̅" },
    { value: 9000, symbol: "I̅X̅" },
    { value: 5000, symbol: "V̅" },
    { value: 4000, symbol: "I̅V̅" },
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
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

  if (num < 0 || num > 100000) {
    console.log("Invalid Input. Enter number between 0 and 100000.");
  } else {
    console.log(toRoman(num));
  }

  readline.close();
});
