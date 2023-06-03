const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

input.sort(function (a, b) {
  return parseInt(a) - parseInt(b);
});

console.log(input.join('\n'));
