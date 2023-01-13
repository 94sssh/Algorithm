const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const M = Number(input[1]);
const material = input[2]
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);
let result = 0;

for (let i = 0; i < material.length; i++) {
  for (let n = i + 1; n < material.length; n++) {
    if (material[i] + material[n] === M) {
      result++;
    }
  }
}

console.log(result);
