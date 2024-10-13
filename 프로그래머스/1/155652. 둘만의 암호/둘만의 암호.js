function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArr = [];

    for (char of alphabet) {
        if (!skip.includes(char)) alphabetArr.push(char)
    }
    
    return [...s].reduce((a, c) => a += alphabetArr[(alphabetArr.indexOf(c) + index) % alphabetArr.length], '');
}