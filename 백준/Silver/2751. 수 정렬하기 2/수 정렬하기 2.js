const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1);

const sortNum = (arr) => {
  arr.sort(function compare(a, b) {
    return a - b;
  });
  console.log(arr.join('\n'));
};

sortNum(input);
