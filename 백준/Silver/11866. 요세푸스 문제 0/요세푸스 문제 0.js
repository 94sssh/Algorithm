const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let circle = Array.from({ length: input[0] }, (v, i) => i + 1);
let num = input[1];
let result = [];

while (circle.length > 0) {
  for (let i = 1; i < num; i++) {
    let josephus = circle.shift();
    circle.push(josephus);
  }
  let josephus = circle.shift();
  result.push(josephus);
}
console.log(`<${result.join(', ')}>`);
