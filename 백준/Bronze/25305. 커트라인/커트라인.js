const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function compare(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

let testCase = input[0].split(' ');
let score = input[1].split(' ').map(Number).sort(compare);

console.log(score[testCase[1] - 1]);
