function solution(prices) {
    return prices.reduce((a, c, i) => {
        for(let idx = i + 1; idx < prices.length; idx++){
            a[i]++;
            if(prices[idx] < c) break; 
        }
        return a;
    }, new Array(prices.length).fill(0))
}