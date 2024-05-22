function solution(strings, n) {
    return strings.sort((a, b) => a > b ? 1 : -1).sort((a, b) => a[n] >= b[n] ? 1 : -1);
}