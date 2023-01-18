function solution(numer1, denom1, numer2, denom2) {
    const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
    const getLCM = (a, b) => (a * (b / getGCD(a, b)));
    
    const numerator = numer1*denom2 + numer2*denom1
    const denominator = denom1*denom2;
    const GCD = getGCD(numerator, denominator)
    return [numerator/GCD, denominator/GCD];
}