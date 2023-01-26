function solution(n) {
    var answer = [0,1];
    for(let i=2; i<=n; i++){
        answer[i] = BigInt(answer[i-1]) + BigInt(answer[i-2])
    }
    return BigInt(answer[n])%BigInt(1234567)
}