const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input.match(/c=|c-|dz=|d-|lj|nj|s=|z=|[a-zA-Z]/g).length)