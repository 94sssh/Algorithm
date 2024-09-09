function solution(a, b) {
    return a.reduce((a, c, i) => a + (c * b[i]), 0);
}