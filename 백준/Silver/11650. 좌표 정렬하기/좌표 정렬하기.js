const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sort = input.slice(1);

const compare = (a, b) => {
  if (Number(a.split(' ')[0]) > Number(b.split(' ')[0])) return 1;
  if (Number(a.split(' ')[0]) < Number(b.split(' ')[0])) return -1;
  if (Number(a.split(' ')[0]) === Number(b.split(' ')[0])) {
    if (Number(a.split(' ')[1]) > Number(b.split(' ')[1])) return 1;
    if (Number(a.split(' ')[1]) < Number(b.split(' ')[1])) return -1;
    return 0;
  }
};

let result = sort.sort(compare);
console.log(result.join('\n'));
