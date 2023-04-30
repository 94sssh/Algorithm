const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input * (input-1))