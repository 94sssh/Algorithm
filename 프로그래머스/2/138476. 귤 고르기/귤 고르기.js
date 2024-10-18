function solution(k, tangerine) {
    const tangerineBox = {};
    
    tangerine.forEach((t) => tangerineBox[t] = (tangerineBox[t] || 0) + 1);
    
    const sortedTangerineBox = Object.values(tangerineBox).sort((a, b) => b - a);
    
    let answer = 0;
    let sum = 0;
    
    for(let i = 0; i <= sortedTangerineBox.length; i++){
        if(sum >= k) return answer;
        sum += sortedTangerineBox[i];
        answer ++;
    }
    return answer;
}