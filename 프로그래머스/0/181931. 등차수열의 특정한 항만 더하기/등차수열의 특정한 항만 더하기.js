function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => {
        if(cur) return acc += (a + d * idx);
        return acc;
    }, 0);
}