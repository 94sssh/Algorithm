function solution(arr, queries) {
    return queries.reduce((a, [s, e]) => {
        for(let i = s; i <= e; i++) a[i]++;
        return a;
    }, [...arr]);
}