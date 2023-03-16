const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];

let N = input[0].split(' ')[0];

let M = input[0].split(' ')[1];

for (let i = 1; i <= N; i++) {
  arr.push(0);
}

for (let i = 1; i <= M; i++) {
  for (let l = input[i].split(' ')[0] - 1; l < input[i].split(' ')[1]; l++) {
    arr[l] = Number(input[i].split(' ')[2]);
  }
}

console.log(arr.join(' '));
