const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const univW = input.slice(0, 10);
const univK = input.slice(10);

console.log(
  univW
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cur) => acc + cur),
  univK
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cur) => acc + cur)
);
