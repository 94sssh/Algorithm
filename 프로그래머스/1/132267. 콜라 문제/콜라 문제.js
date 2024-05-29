function solution(a, b, n) {
    let totalCoke = 0;
    
    while(n >= a) {
        const newCoke = Math.floor(n / a) * b;
        const remainCoke = n % a;
        totalCoke += newCoke;
        n = newCoke + remainCoke;
    }
    
    return totalCoke;
}