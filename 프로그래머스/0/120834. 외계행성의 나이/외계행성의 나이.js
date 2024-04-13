function solution(age) {
    const alphabet = 'abcdefghij';
    return String(age).split('').map((el) => alphabet[el]).join('');
}