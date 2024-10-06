function solution(citations) {
    const length = citations.length;
    citations.sort((a, b) => a - b);
    
    return citations.reduce((a, c, i) => c >= length - i ? length - i > a ? length - i : a : a, 0);
}