function solution(a, b) {
    const answer = 2 * a * b;
    return answer >= `${a}`+`${b}` ? answer :  Number(`${a}`+`${b}`) ;
}