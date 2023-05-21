const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let testCase = input[0];

let arr = [];

for (let i = 1; i <= testCase; i++) {
    if (input[i] !== 0) {
        arr.push(input[i]);
    } else {
        arr.pop();
    }
}

let result = arr.reduce((sum, cur) => sum + cur, 0);

console.log(result);
