function solution(arr1, arr2) {
   return arr1.map((c, i) => {
        const arr = [];
        
        arr2[0].forEach((_, j) => {
            let sum = 0;
            
            arr2.forEach((_, k) => {
                sum += arr1[i][k] * arr2[k][j];
            });
            
            arr.push(sum);
        })
       return arr;
    });
}

//         [ 3,  3]
//         [ 3,  3]
// [1, 4]  [15, 15]
// [3, 2]  [15, 15]
// [4, 1]  [15, 15]

// 0,2는 2,0 0,0 과 2,1 1,0의 곱


//           [ 5,  4,  3]
//           [ 2,  4,  1]
//           [ 3,  1,  1]
// [2, 3, 2] [22, 22, 11]
// [4, 2, 4] [36, 28, 18]
// [3, 1, 4] [29, 20, 14]