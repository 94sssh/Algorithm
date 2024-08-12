function solution(quiz) {
    const calc = (str) => {
        const operation = str.split(' ')[1];
        const [x, _, y, __, z] = str.split(' ').map(Number);

        return operation === '+' ? x+y === z ? 'O' : 'X' : x-y === z ? 'O' : 'X';
    }
    
    return quiz.map((el) => calc(el));
}