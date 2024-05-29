function solution(n, works) {
    if (n > works.reduce((a,c) => a+c, 0)) return 0;

    const worksMap = works.reduce((a, c) => a.set(c, a.get(c)+1 || 1), new Map());
    while (n > 0 && worksMap.size) {
        const cur = [...worksMap.keys()].reduce((a,c) => a > c ? a : c, 1);
        const curVal = worksMap.get(cur);
        const dif = n - curVal;

        if (dif >= 0) worksMap.delete(cur);
        else worksMap.set(cur, -dif); 
        
        const prev = cur-1;
        if (prev > 0) worksMap.set(prev, (worksMap.get(prev) || 0) + (dif >= 0 ? curVal : n));
        
        n -= curVal;
    }
    
    return [...worksMap.entries()].reduce((a, [val, repeat]) => a + val ** 2 * repeat, 0)
}