function solution(k, score) {
    const honor = [];
    const answer = [];
    
    score.forEach((s)=>{
        honor.push(s);
        honor.sort((a,b)=> b-a);
        answer.push(honor.slice(0,k).at(-1))
    })
    
    return answer;
}