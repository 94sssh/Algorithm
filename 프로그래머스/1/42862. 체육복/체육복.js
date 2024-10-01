function solution(n, lost, reserve) {
    const answer = [];
    const originReserve = reserve;
    
    reserve = reserve.filter((el) => !lost.includes(el))
    newLost = lost.filter((el) => !originReserve.includes(el))
    
    for(let i = 1; i <= n; i++){
        if (!newLost.includes(i)) answer.push(i);
        else if (reserve.includes(i)) {
            answer.push(i);
            reserve = reserve.filter((el) => el !== i)
        } else if (reserve.includes(i-1)) {
            answer.push(i);
            reserve = reserve.filter((el) => el !== i - 1)
        } else if (reserve.includes(i+1)) {
            answer.push(i);
            reserve = reserve.filter((el) => el !== i + 1)
        }
    };
    
    return answer.length;
}