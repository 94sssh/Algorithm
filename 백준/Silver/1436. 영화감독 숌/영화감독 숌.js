const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [];
for (let i = 666; arr.length < input; i++) {
  if (/666/.test(i)) {
    arr.push(i);
  }
}
console.log(arr.at(-1));
