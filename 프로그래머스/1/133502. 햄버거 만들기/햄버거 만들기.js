function solution(ingredient) {
    let burger = 0;
    const burgerStack = [];
    
    ingredient.forEach((ing) => {
        burgerStack.push(ing);
        
        while(`${burgerStack.slice(-4)}` === `${[1, 2, 3, 1]}`){
            burger++;
            burgerStack.pop();
            burgerStack.pop();
            burgerStack.pop();
            burgerStack.pop();
        };
    });
    
    return burger;
}