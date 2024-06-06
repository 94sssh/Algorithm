function solution(intStrs, k, s, l) {
    return intStrs.reduce((a, c) => {
        const slice = c.slice(s, s + l);
        if(slice > k) a.push(+slice);
        return a;
    }, []);
}