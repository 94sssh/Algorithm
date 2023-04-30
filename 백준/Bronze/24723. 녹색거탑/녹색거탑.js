const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = 1;

for(let i=1; i<=input; i++){
    result *= 2;
}

console.log(result)