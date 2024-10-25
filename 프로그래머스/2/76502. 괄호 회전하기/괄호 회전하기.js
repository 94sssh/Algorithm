function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        const stack = [];
        
        let startWithClose = false;
        
        s = s.slice(1) + s.slice(0, 1);
        
        for(let j = 0; j < s.length; j++){
            if(s[j] === "[" || s[j] === "{" || s[j] === "(") stack.push(s[j]);
            
            if(stack.length === 0) {
                startWithClose = true;
                break;
            }
                
            if(s[j] === "]" && stack.at(-1) === "[" || s[j] === "}" && stack.at(-1) === "{" || s[j] === ")" && stack.at(-1) === "(") stack.pop();
        };
        
        if(stack.length === 0 && !startWithClose) answer++;
    };
    return answer;
};