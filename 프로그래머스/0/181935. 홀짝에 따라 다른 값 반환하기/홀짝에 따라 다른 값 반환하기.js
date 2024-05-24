function solution(n) {
    return new Array(Math.ceil(n/2)).fill(0).reduce((acc, cur, idx) => {
        return n % 2 === 0 ? acc += ((idx + 1) * 2) ** 2 : acc += (idx + 1) * 2 - 1;
    }, 0);
}