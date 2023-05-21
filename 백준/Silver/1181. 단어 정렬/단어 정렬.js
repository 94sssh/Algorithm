const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = input[0];
const text = input.slice(1);

let result = text.sort();

result.sort(function (a, b) {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    if (a.length === b.length) return 0;
});

const check = (result) => [...new Set(result)];

console.log(check(result).join('\n'));
