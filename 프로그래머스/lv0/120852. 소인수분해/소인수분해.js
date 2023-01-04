function solution(n) {
    var answer = [];
    const findPrime = (num) => {
        for(let i=2; i<num; i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
    
    for(let i=2; i<=n; i++){
        if(n%i===0){
            answer.push(i)
        }
    }
    return answer.filter(el=>findPrime(el));
}