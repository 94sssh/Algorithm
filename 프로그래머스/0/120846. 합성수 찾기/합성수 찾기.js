function solution(n) {
    let answer = 0;
    const isComposite = (num) => {
        if(num < 2) return false;
        for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0) return true;
        }
        return false;
    }
    
    for(let i=1; i<=n; i++) if(isComposite(i)) answer++;
    
    return answer;
}