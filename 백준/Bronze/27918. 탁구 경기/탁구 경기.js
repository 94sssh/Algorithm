const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let score = input.slice(1)
let result = [0,0]

for(let i=0; i<score.length; i++){
    if(score[i]==='D'){
        result[0]++
    } else {
        result[1]++
    }
    if(Math.abs(result[0]-result[1])===2){
        return console.log(result.join(':'));
    }
}

console.log(result.join(':'))