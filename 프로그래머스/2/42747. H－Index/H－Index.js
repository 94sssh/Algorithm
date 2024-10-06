function solution(citations) {
    citations.sort((a, b) => a - b);
    
    return citations.reduce((a, c, i) => {
        if(c > citations.length - i) return citations.length - i > a ? citations.length - i : a;
        else if (c === citations.length - i) return c;
        else return a;
    }, 0);
}