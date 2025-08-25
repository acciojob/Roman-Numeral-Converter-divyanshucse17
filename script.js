const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function convertToRoman(num) {
  if (num === 0) return "N";

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

app.post('/romanConverter', (req, res) => {
  const { input } = req.body;
  
  if (typeof input !== 'number' || input < 0 || input > 100000) {
    return res.status(400).json({ error: "Invalid Input. Enter number between 0 and 100000." });
  }
  
  const roman = convertToRoman(input);
  res.json({ roman });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});