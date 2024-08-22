function solution(arr1, arr2) {
    return arr1.reduce((acc, cur, idx) => {
        acc.push(cur.reduce((a, c, i) => {
            a.push(cur[i]+arr2[idx][i]);
            return a;
        }, []));
        return acc;
    }, []);
}