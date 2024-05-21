function solution(myString, pat) {
    return [...myString].map((string) => string === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}