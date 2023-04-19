const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1]
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => a - b);
let testCase = input[3].split(' ').map((v) => +v);

const binarySearch = (arr, test) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < test) {
      left = mid + 1;
    } else if (arr[mid] > test) {
      right = mid - 1;
    } else {
      return 1;
    }
  }
  return 0;
};

let result = testCase.map((el) => {
  return binarySearch(arr, el);
});

console.log(result.join('\n'));
