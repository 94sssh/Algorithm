function solution(n) {
    const answer = [n];
    
    while(answer.at(-1) !== 1){
        const x = answer.at(-1);
        const el = x % 2 === 0 ? x/2: (3*x)+1;
        answer.push(el);
    }
    
    return answer;
}