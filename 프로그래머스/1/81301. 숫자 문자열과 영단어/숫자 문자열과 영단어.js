function solution(s) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    return +arr.reduce((a, c, i) => {
        const regex = `${c}`;
        const regexAll = new RegExp(regex, "g");
        return a.replace(regexAll, i);
    }, s);
}