function solution(n) {
    let answer = 0;
    const factorial = (n) => (n !== 1) ? n * factorial(n - 1) : 1;
    
    for(let i = 1; i<=n; i++){
        if(factorial(i) <= n) answer = i;
        else break;
    }
    
    return answer;
}