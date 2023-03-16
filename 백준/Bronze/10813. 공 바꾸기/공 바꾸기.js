const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];

let N = input[0].split(' ')[0];

let M = input[0].split(' ')[1];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

for (let i = 1; i <= M; i++) {
  let temp = arr[input[i].split(' ')[0] - 1];
  arr[input[i].split(' ')[0] - 1] = arr[input[i].split(' ')[1] - 1];
  arr[input[i].split(' ')[1] - 1] = temp;
}

console.log(arr.join(' '));
