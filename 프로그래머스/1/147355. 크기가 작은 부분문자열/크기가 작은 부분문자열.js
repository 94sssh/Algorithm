function solution(t, p) {
    const limit = t.length - p.length;
    
    return [...t].reduce((a, _, i) => {
        if(i > limit) return a;
        return t.slice(i, i+p.length) <= p ? a+=1 : a;
    }, 0)
}