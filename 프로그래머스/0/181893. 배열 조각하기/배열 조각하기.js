function solution(arr, query) {
    query.forEach((q, i)=>{
        arr = i % 2 === 0 ? arr.slice(0, q + 1) : arr.slice(q);
    })
    return arr;
}