function solution(arr, queries) {
    const answer = [];
    queries.forEach(([s, e, k]) => {
        const numbers = []
        for(let i=s; i<=e; i++){
           if(arr[i] > k) numbers.push(arr[i]);
        }
        if(numbers.length === 0) numbers.push(-1);
        answer.push(Math.min(...numbers));
    });
    
    return answer;
}