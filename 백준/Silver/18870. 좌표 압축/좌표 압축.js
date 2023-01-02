const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const sortedArr = [...new Set(input[1].split(' ').sort((a, b) => a - b))];

let obj = {};

sortedArr.forEach((el, idx) => (obj[el] = idx));

console.log(
  input[1]
    .split(' ')
    .map((el) => obj[el])
    .join(' ')
);
