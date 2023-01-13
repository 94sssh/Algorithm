const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = 0; i < input.length - 1; i++) {
  let result = 0;
  for (let n = input[i] + 1; n <= input[i] * 2; n++) {
    if (isPrime(n)) {
      result++;
    }
  }
  console.log(result);
}
