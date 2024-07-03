function solution(a, b, c, d) {
    let dice = [a, b, c, d];
    const diceSet = new Set(dice);
    const diceType = diceSet.size;
    
    if(diceType === 1) {
        return 1111 * [...diceSet][0];
    } else if (diceType === 2) {
        if(dice.filter((el) => el === dice[0]).length === 2){
            const [p, q] = diceSet;
            return (p + q) * Math.abs(p - q);
        } else {
            const [p, q] = diceSet;
            if(dice.filter((el) => el === p).length === 3){
                return (10 * p + q)**2;
            } else {
                return (10 * q + p)**2;
            } 
        }
        const [p, q] = diceSet;
        return (p + q) * Math.abs(p - q);
    } else if (diceType === 3) {
        for (let die of diceSet) {
            if(dice.filter((el) => el === die).length === 2){
                dice = dice.filter((el) => el !== die);
            }
        }
        const [q, r] = dice;
        return q * r;
    };
    
    return [...diceSet].sort()[0];
}