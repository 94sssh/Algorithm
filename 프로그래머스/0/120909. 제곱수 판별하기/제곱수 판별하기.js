function solution(n) {
    for(let i=1; i<=n; i++){
        if(n%i===0 && i*i===n) return 1;
    }
    return 2;
}