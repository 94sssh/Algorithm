function solution(s) {
    const store = [];
    
    return [...s].reduce((a, c, i) => {
        a.push(store.includes(c) ? i - store.lastIndexOf(c) : -1);
        store.push(c);
        return a;
    }, []);
}