const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input.sort((a, b) => a - b).join(' '));
