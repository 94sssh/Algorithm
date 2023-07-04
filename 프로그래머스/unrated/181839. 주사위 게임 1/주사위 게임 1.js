function solution(a, b) {
    var answer = 0;
    
    if(a%2===1 && b%2===1){
        return a**2 + b**2
    } else if (a%2===1 || b%2===1){
        return 2*(a+b)
    } else if (a%2===0 && b%2===0){
        return Math.abs(a-b)
    }
}