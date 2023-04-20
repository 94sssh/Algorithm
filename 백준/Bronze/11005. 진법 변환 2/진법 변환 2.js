const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = parseInt(input[0]);
let B = parseInt(input[1]);

console.log(N.toString(B).toUpperCase())