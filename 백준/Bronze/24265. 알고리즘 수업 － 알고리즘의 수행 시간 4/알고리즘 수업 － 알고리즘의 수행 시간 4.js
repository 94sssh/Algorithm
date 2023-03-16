const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

let result = 0;

for (let i = 0; i < n; i++) {
  result += i;
}

console.log(`${result}
2`);
