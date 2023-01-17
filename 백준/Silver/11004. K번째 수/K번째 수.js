const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const index = input[0].split(' ')[1];
const arr = input[1].split(' ').map(Number);

console.log(arr.sort((a, b) => a - b)[index - 1]);
