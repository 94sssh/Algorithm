function solution(myStr) {
    const separator = ['a', 'b', 'c'];
    const answer = myStr.split(/[abc]/g).filter(Boolean);
    return answer.length === 0 ? ["EMPTY"] : answer;
}