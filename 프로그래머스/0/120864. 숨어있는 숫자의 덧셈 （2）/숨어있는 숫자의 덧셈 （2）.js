function solution(my_string) {
    return [...my_string].map((string) => /[a-zA-Z]/g.test(string) ? ' ' : string).join('').split(' ').filter(Boolean).reduce((acc, cur) => acc + +cur, 0);
}