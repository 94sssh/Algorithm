function solution(strArr) {
    const answer = [];
    strArr.sort((a, b) => b.length - a.length);
    
    for(let i=1; i<=strArr[0].length; i++){
        answer.push(strArr.filter((str) => str.length === i).length)
    }
    
    return Math.max(...answer);
}