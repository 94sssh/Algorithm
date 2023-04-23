const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let empty = ' ';
let star = '*';
let result = [];

for(let i=input-1; i>0; i--){
    result.push(`${empty.repeat(i)}${star.repeat(input-i-1)}*${star.repeat(input-i-1)}`)
}


for(let i=0; i<input; i++){
    result.push(`${empty.repeat(i)}${star.repeat(input-i-1)}*${star.repeat(input-i-1)}`)
}

console.log(result.join('\n'))