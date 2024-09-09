function solution(n) {
    return new Array(n).fill().map((_, i)=>i+1).reduce((a, c) => n % c === 0 ? a + c : a, 0);
}