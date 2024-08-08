function solution(s) {
    const answer = [];
    const chars = [...s].reduce((a, c) => a[c] ? { ...a, [c]: a[c]+1} : { ...a, [c]: 1}, {});
    
    for(const key in chars) if(chars[key] === 1) answer.push(key);
    
    return answer.sort().join('');
}