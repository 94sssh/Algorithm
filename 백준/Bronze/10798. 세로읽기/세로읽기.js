const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for(let i=0; i<15; i++){
    for(let j=0; j<input.length; j++){
        if(input[j][i]){
        result += input[j][i]
        }
    }
}

console.log(result)