const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let k = Number(input[0].split(' ')[1]);
let b = input[1].split(' ').map(Number);

let count = 0;

function selectionSort(arr) {
  for (let i = arr.length-1; i >= 0; i--) {
    let highest = i;
    for (let j = i-1; j >= 0; j--) {
      if (arr[j] > arr[highest]) {
        highest = j;
      }
    }
    if (i !== highest) {
      count++
      let temp = arr[i];
      arr[i] = arr[highest];
      arr[highest] = temp;
      if(count===k){
          return console.log(arr[highest], arr[i])
      }
    }
  }
  return console.log(-1);
}

selectionSort(b)