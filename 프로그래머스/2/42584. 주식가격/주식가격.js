function solution(prices) {
    const stack = new Array(prices.length).fill(0);

    prices.forEach((price, idx) => {
        for(let i = idx + 1; i < prices.length; i++){
            stack[idx]++;
            if(prices[i] < price) break;
        }
    })
    
    return stack;
}