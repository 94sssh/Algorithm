const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [];

for(let i=0; i<input.length; i++){
    arr.push(input.slice(i))
}

console.log(arr.sort().join('\n'))