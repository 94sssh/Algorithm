function solution(score) {
    score = score.map(([eng, math]) => (eng + math) / 2);
    const ranking = [...score].sort((a,b) => b-a);
    
    return score.map((el)=>ranking.indexOf(el)+1);
}