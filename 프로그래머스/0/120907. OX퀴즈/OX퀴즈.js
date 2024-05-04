function solution(quiz) {
    const calc = (str) => {
        const operation = str.split(' ')[1];
        const [x, _, y, __, z] = str.split(' ').map((el)=>Number(el));

        if(operation === '+') return x+y === z ? 'O' : 'X';
        else return x-y === z ? 'O' : 'X';
    }
    
    return quiz.map((el)=>calc(el));
}