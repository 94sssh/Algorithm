function solution(strArr) {
    const answer = [];
    
    for(let i=1; i<=30; i++){
        answer.push(strArr.filter((str)=>str.length === i).length)
    }
    
    return Math.max(...answer);
}