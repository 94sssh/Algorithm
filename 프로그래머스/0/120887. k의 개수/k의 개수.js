function solution(i, j, k) {
    const stringArr = [];
    const regex = new RegExp(`[${k}]`, 'g');
    for(i; i <= j; i++) stringArr.push(i);
    
    const answer = stringArr.join('').match(regex)
    
    return answer ? answer.length : 0;
}