function solution(ingredient) {
    const burgerStack = [];
    
    return ingredient.reduce((a, c) => {
        burgerStack.push(c);
        while(`${burgerStack.slice(-4)}` === `${[1, 2, 3, 1]}`){
            a++;
            burgerStack.pop();
            burgerStack.pop();
            burgerStack.pop();
            burgerStack.pop();
        };
        return a;
    }, 0);
}