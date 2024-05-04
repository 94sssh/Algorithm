function solution(n) {
    let answer = 0;
    if(n === 1) return 1;

    const factorial = (n) => (n !== 1) ? n * factorial(n - 1) : 1;
    
    for(let i = 2; i<=n; i++){
        if(factorial(i) <= n) answer = i;
        else break;
    }
    
    return answer;
}