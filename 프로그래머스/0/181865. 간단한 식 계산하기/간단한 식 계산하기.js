function solution(binomial) {
    const [a, op, b] = binomial.split(' ')
    if(op === '+') return +a + +b;
    if(op === '-') return +a - +b;
    if(op === '*') return +a * +b;
}