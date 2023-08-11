const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const palindrome = (str) => {
  let temp = str.split('').reverse().join('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== temp[i]) {
      return 0;
    }
  }
  return 1;
};

console.log(palindrome(input));
