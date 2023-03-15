const input = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());

let result = '';
for (let i = 1; i <= input / 4; i++) {
  result += 'long ';
}

console.log(result + 'int');
