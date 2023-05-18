const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

const Queue = function () {
  this.queueTable = [];
  this.first = 0;
  this.last = 0;
  this.length = 0;

  this.push = function (num) {
    this.queueTable[this.last] = num;
    this.last++;
    this.length++;
  };

  this.pop = function () {
    if (this.length === 0) {
      result.push(-1);
    } else {
      result.push(this.queueTable[this.first]);
      this.first++;
      this.length--;
    }
  };

  this.size = function () {
    result.push(this.length);
  };

  this.empty = () => {
    if (this.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  };

  this.front = () => {
    if (this.length === 0) {
      result.push(-1);
    } else {
      result.push(this.queueTable[this.first]);
    }
  };

  this.back = () => {
    if (this.length === 0) {
      result.push(-1);
    } else {
      result.push(this.queueTable[this.last - 1]);
    }
  };
};

let test = new Queue();

let queueCheck = (input) => {
  const testCase = input[0];
  let order;
  for (let i = 1; i <= testCase; i++) {
    order = input[i].trim();
    if (order === 'pop') {
      test.pop();
    } else if (order === 'size') {
      test.size();
    } else if (order === 'empty') {
      test.empty();
    } else if (order === 'front') {
      test.front();
    } else if (order === 'back') {
      test.back();
    } else {
      let temp = order.split(' ');
      test.push(temp[1]);
    }
  }
};

queueCheck(input);

console.log(result.join('\n'));
