function solution(n, k) {
    var answer = [];
    for(let i=0; i<=n; i+=k){
        if(i!==0)answer.push(i)
    }
    return answer;
}