function solution(n) {
    const answer = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            answer.push(i);
            answer.push(n/i);
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}