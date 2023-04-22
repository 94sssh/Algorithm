const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let N = parseInt(input[0]);
let K = parseInt(input[1]);

let result = [];

for(let i=1; i<=N; i++){
    if(N%i===0){
        result.push(i)
    }
}

result.length<K ? console.log(0): console.log(result[K-1])