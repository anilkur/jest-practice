// factorial.js
const factorial = (num) => {
    if (num < 0) return -1; // Negatif sayılar için faktöriyel tanımlı değil
    if (num === 0) return 1; // 0! = 1
  
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  
  module.exports = factorial;
  