const isPrime = (number) => {
  if(number < 2) return false;
  for(let i=2; i<=Math.floor(Math.sqrt(number)); i++){
    if(number % i === 0){
      return false; 
    }
  }
  return true; 
}

const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));

function solution(a, b) {
    if(a % b === 0) return 1;
    
    let result = [];
    
    for(let i=2; i <= b/getGCD(a,b); i++){
        if(b/getGCD(a,b)%i===0) result.push(i);
    }

    const answer = result.filter((el) => el!==2 && el!==5)
    
    if(answer.filter(el=>isPrime(el)).length>0) return 2;
    return 1;
}