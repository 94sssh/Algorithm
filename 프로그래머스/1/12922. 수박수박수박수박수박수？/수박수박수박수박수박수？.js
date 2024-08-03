function solution(n) {
    return new Array(n).fill(0).map((el, i) => i%2===0 ? '수' : '박').join('');
}