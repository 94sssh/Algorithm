function solution(n) {
    const answer = [];
    
    for(let i=0; i<n; i++){
        const arr = new Array(n).fill(0);
        arr[i] = 1;
        answer.push(arr);
    }
    
    return answer;
}