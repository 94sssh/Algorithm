const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
let txt;

const check = (bracket) => {
  stack = [];
  txt = bracket.trim();
  for (let i = 0; i < txt.length; i++) {
    if (txt.length % 2 !== 0) {
      return console.log('NO');
    }

    if (txt[i] === '(') {
      stack.push('(');
    } else if (txt[i] === ')') {
      if (stack.length === 0) {
        return console.log('NO');
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
};

for (let n = 1; n < input.length; n++) {
  check(input[n]);
}
