function solution(arr) {
   return arr.reduce((acc, cur, idx) => {
        if(acc === 0) return 0;
        return cur.reduce((a, _, i) => {
            if(a === 0) return 0;
            return cur[i] === arr[i][idx] ? 1 : 0;
        }, 1)
    }, 1)
}