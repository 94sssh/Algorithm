const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

const lcm = (a, b) => {
  console.log(a * (b / gcd(a, b)));
};

for (let i = 1; i < input.length; i++) {
  const value = input[i].trim().split(' ');
  lcm(value[0], value[1]);
}
