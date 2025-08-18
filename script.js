function convertToRoman(num) {
    if (num === 0) return ""; // Romans didn't have a numeral for zero
    
    const romanSymbols = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // 1-9
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // 10-90
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // 100-900
        ["", "M", "MM", "MMM", "Mↁ", "ↁ", "ↁM", "ↁMM", "ↁMMM", "Mↂ"], // 1000-9000
        ["", "ↂ", "ↂↂ", "ↂↂↂ", "ↂↇ", "ↇ", "ↇↂ", "ↇↂↂ", "ↇↂↂↂ", "ↂↈ"], // 10000-90000
        ["", "ↈ"] // 100000
    ];
    
    // Special cases for larger numbers (using Unicode Roman numeral symbols)
    if (num >= 100000) {
        return "ↈ".repeat(Math.floor(num / 100000)) + convertToRoman(num % 100000);
    }
    
    let roman = "";
    let str = num.toString();
    let len = str.length;
    
    for (let i = 0; i < len; i++) {
        let digit = parseInt(str[i]);
        roman += romanSymbols[len - 1 - i][digit];
    }
    
    return roman;
}