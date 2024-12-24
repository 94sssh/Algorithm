function solution(n) {
    const stack = [1, 2];
    
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    for(let i = 2; i < n; i++){
        stack.push(stack.at(-1) % 1234567 + stack.at(-2) % 1234567);
    };
    
    console.log(stack)
    
    return stack.at(-1) % 1234567;
}

// 1 2 3 4 5  6  7  8
// 1 2 3 5 8 13 21 34