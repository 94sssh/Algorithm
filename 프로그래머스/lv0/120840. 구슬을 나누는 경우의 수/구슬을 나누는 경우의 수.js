function solution(balls, share) {
    if(balls===share){
        return 1;
    }
    const factorial = (n) => {
        return (BigInt(n) != 1) ? BigInt(n) * factorial(n - 1) : BigInt(1);
    }
    return factorial(balls)/(factorial(balls-share)*factorial(share))
}