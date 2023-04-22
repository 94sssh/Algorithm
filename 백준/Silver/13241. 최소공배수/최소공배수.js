const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
const getLCM = (a, b) => (a * (b / getGCD(a, b)));

console.log(getLCM(input[0], input[1]))