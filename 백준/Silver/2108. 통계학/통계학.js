const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

const findMode = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  const obj = arr.reduce((acc, cur) => {
    acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

  const result = [];

  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  result.sort((a, b) => b[1] - a[1]);

  if (result[0][1] === result[1][1]) {
    const check = result[0][1];
    return result.filter((el) => el[1] === check).sort((a, b) => a[0] - b[0])[1][0];
  }
  return result[0][0];
};

const nums = input.slice(1);
const sort = nums.sort((a, b) => a - b);

console.log(parseInt(Math.round(nums.reduce((acc, cur) => acc + cur) / nums.length)));
console.log(sort.at(nums.length / 2));
console.log(findMode(sort));
console.log(sort.at(-1) - sort[0]);
