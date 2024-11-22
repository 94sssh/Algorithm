function solution(s)
{
    const stack = [];

    [...s].forEach((c) => {
        if(stack.at(-1) === c){
            stack.pop();
        } else {
            stack.push(c);
        }
    })

    return stack.length === 0 ? 1 : 0;
}