const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = input[0];
let B = parseInt(input[1]);

console.log(parseInt(N, B))