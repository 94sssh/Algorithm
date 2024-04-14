function solution(s) {
    const answer = [];
    s.split(' ').forEach((num)=>{
        if(num === 'Z') return answer.pop();
        return answer.push(num);
    })
    return answer.reduce((a, c) => a + +c, 0);
}