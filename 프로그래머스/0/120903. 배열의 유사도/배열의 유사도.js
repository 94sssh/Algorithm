function solution(s1, s2) {
    return s1.filter(el => s2.includes(el)).length;
}