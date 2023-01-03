function solution(a, b) {
    if(a % b === 0){
        return 1;
    }
    const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
    let result = [];
    for(let i=2; i<=b/getGCD(a,b); i++){
        if(b/getGCD(a,b)%i===0){
            result.push(i)
        }
    }
    const findPrime = (n) => {
        if(n===1){
            return false;
        }
        for(let i=2; i<n; i++){
            if(n%i===0){
                return false
            }
        }
        return true;
    }
    result = result.filter(el=>el!==2&&el!==5)
    if(result.filter(el=>findPrime(el)).length>0){
        return 2;
    } else {
        return 1;
    }
}