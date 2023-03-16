const n = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

console.log(`${n * n * n}
3`);
