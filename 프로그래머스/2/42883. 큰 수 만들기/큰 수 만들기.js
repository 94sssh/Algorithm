function solution(number, k) {
    const stack = [];
    let count = 0;
    
    [...number].forEach((num) => {
        while(count !== k && stack.at(-1) < num){
            stack.pop();
            count++;
        };
        if(stack.length < number.length - k) stack.push(num);
    });
    
    return stack.join('');
}