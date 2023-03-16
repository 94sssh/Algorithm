const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

console.log(`${n * n}
2`);
