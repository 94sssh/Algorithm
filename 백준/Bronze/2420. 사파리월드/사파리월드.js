const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];

console.log(Math.abs(a-b))