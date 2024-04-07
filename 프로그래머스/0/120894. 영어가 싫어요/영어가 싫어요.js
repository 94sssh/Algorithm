function solution(numbers) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    const regex = new RegExp(`${arr.join('|')}`, 'g');
    
    return Number(numbers.match(regex).map(el=>arr.indexOf(el)).join(''))
}