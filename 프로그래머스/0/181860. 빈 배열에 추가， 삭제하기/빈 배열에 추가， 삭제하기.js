function solution(arr, flag) {
    return arr.reduce((a, c, i) => {
      return flag[i] ? [...a, ...new Array(c * 2).fill(c)] : a.slice(0, -c);
    }, []);
}