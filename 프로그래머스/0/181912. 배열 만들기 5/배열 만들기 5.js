function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, cur) => {
        const slice = cur.slice(s, s + l);
        if(slice > k) acc.push(+slice);
        return acc;
    }, []);
}