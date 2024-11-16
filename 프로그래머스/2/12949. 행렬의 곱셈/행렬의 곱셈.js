function solution(arr1, arr2) {
   return arr1.map((_, i) => arr2[0].map((_, j) => arr2.reduce((a, _, k) => a += arr1[i][k] * arr2[k][j], 0)));
};