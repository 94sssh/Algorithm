function solution(k, score) {
    const honor = [];
    
    return score.reduce((acc, cur) => {
        honor.push(cur);
        honor.sort((a, b) => b - a);
        acc.push(honor.slice(0, k).at(-1));
        return acc;
    }, []);
}