const input = Number(require('fs').readFileSync('/dev/stdin').toString());

if (input <= 9) {
  console.log(input - 1);
} else if (input > 1023) {
  console.log(-1);
} else {
  let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let answer = [];
  function combination(arr, selectNum) {
    let result = [];
    if (selectNum === 0) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed + v]);
      result.push(...combineFix);
    });
    return result;
  }

  for (let i = 9; i >= 0; i--) {
    answer = [...answer, ...combination(arr, i)];
  }

  console.log(answer.at(-input)[0]);
}
