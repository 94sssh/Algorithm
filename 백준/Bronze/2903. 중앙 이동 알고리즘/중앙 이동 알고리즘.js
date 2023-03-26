const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = 5;
let square = 1;
let sq = 2

for(let i=1; i<input; i++){
    sq *= 2
    result += sq
}

for(let i=1; i<=input; i++){
    square *= 4
}

console.log(result + square)