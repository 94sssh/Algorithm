function solution(n, m) {
    const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
    const getLCM = (a, b) => a * (b / getGCD(a, b));
    return [getGCD(n, m), getLCM(n, m)];
}