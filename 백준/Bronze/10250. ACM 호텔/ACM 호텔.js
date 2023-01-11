const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  let number = input[i].split(' ');
  const y = number[2] % number[0] === 0 ? number[0] : number[2] % number[0];
  const x = Math.ceil(number[2] / number[0]);
  x < 10 ? console.log(`${y}0${x}`) : console.log(`${y}${x}`);
}
