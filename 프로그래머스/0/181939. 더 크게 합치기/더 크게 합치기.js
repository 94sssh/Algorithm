function solution(a, b) {
    let answer1 = `${a}${b}`;
    let answer2 = `${b}${a}`;
    return answer1 > answer2 ? +answer1 : +answer2;
}