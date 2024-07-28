function solution(l, r) {
    const answer = [];
    
    for(let i=l; i<=r; i++){
        if([...String(i)].every((el) => el === '0' || el === '5')) answer.push(i);
    }
    
    if(answer.length === 0) answer.push(-1);
    
    return answer;
}