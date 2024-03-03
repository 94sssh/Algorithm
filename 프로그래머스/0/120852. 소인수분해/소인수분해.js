function solution(n) {
    const answer = [];
    const isPrime = (num) => {
        if(num < 2) return false;
        
        for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0) return false;
        }
        
        return true;
    } 
    
    for(let i=2; i<=n; i++){
        if(n%i===0){
            answer.push(i)
        }
    }
    
    return answer.filter(el=>isPrime(el));
}