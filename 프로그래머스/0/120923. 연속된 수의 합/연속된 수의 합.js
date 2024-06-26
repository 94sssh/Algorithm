function solution(num, total) {
    const answer = [];
    const middleIdx = Math.floor(total/num);
    answer.push(middleIdx);
    
    for(let i=1; answer.length < num; i++){
        answer.push(middleIdx + i);
        answer.push(middleIdx - i)
    }
    
    num%2===0 && answer.pop();
    
    return answer.sort((a, b)=>a-b);
}