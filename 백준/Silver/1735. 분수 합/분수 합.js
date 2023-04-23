const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let firstNum = input[0].split(' ')[0]
let secondNum = input[1].split(' ')[0];
let firstDen = input[0].split(' ')[1]
let secondDen = input[1].split(' ')[1];

let num = firstNum * secondDen + secondNum * firstDen
let den = firstDen * secondDen;

const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));

let gcd = getGCD(num, den);

console.log(`${num/gcd} ${den/gcd}`)
