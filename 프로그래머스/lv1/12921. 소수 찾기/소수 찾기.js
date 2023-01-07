function solution(n) {
    let answer = 0;
    const sieveOfEratosthenes = (n) => {
      let prime = [];
      for (let i = 0; i <= n; i++) {
        prime[i] = true;
      }

      for (let p = 2; p * p <= n; p++) {
        if (prime[p] === true) {
          for (let i = p * p; i <= n; i += p) {
            prime[i] = false;
          }
        }
      }

      for (let p = 2; p <= n; p++) {
        if (prime[p]) {
          answer+=1;
        }
      }
        return answer;
    }
    return sieveOfEratosthenes(n)
}