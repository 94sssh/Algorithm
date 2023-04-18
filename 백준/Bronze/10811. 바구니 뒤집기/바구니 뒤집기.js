const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0].split(' ')[0]);
let M = parseInt(input[0].split(' ')[1]);

let basket = [];

for(let i=1; i<=N; i++){
    basket.push(i)
}

for(let j=1; j<=M; j++){
    let idx = input[j].split(' ').map(v=>+v);
    let temp = basket.slice(idx[0]-1, idx[1]).reverse();
    for(let k=idx[0]; k<=idx[1]; k++){
        basket[k-1] = temp[k-idx[0]];
    }
}

console.log(basket.join(' '))