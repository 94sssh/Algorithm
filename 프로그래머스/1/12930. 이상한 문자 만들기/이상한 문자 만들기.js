function solution(s) {
    return s.split(' ').reduce((a, c) => {
        a.push([...c].map((el, i) => i%2===0 ? el.toUpperCase() : el.toLowerCase()).join(''));
        return a;
    }, []).join(' ');
}