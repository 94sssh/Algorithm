const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let ea = Number(input[0]);
let divisor = input[1].split(' ').sort(function compare(a, b) {
  return a - b;
});

if (ea === 1) {
  console.log(divisor ** 2);
} else {
  console.log(divisor[0] * divisor[divisor.length - 1]);
}
