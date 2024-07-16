function solution(x) {
    const sum = [...String(x)].reduce((a, c) => a + +c, 0);
    return x % sum === 0;
}