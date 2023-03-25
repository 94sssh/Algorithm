const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

class Heap {
  constructor() {
    this.arr = [];
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  getMax() {
    return this.arr[0];
  }

  insert(k) {
    let arr = this.arr;
    arr.push(k);

    let i = arr.length - 1;
    while (i > 0 && arr[this.parent(i)] < arr[i]) {
      let p = this.parent(i);
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p;
    }
  }

  extractMax() {
    let arr = this.arr;
    if (arr.length == 1) {
      return arr.pop();
    }

    let res = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.MaxHeapify(0);
    return res;
  }

  MaxHeapify(i) {
    let arr = this.arr;
    let n = arr.length;
    if (n === 1) {
      return;
    }
    let l = this.left(i);
    let r = this.right(i);
    let largest = i;
    if (l < n && arr[l] > arr[i]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.MaxHeapify(largest);
    }
  }
}

let heap = new Heap();
let result = '';

for (let i = 1; i <= input.length; i++) {
  if (input[i] === 0) {
    if (heap.arr.length === 0) {
      result += '0' + '\n';
    } else {
      result += heap.extractMax() + '\n';
    }
  } else {
    heap.insert(input[i]);
  }
}

console.log(result.slice(0, -1));
