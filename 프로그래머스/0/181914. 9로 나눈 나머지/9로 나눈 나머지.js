function solution(number) {
    return [...number].reduce((acc, cur) => acc + +cur, 0) % 9
}