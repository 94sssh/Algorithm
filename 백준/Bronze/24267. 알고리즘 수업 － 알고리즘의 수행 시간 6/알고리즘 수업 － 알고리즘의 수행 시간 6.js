const n = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]);

console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}
3`);
