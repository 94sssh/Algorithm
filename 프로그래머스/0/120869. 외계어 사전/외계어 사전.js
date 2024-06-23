function solution(spell, dic) {
    return dic.reduce((a, c) => {
        if(a === 2) return spell.length === c.length && spell.every((el) => c.includes(el)) ? 1 : 2;
        return a;
    }, 2)
};