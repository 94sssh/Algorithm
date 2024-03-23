function solution(arr, queries) {
    queries.forEach(([idx1, idx2])=>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    })
    
    return arr;
}