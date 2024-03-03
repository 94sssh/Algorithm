function solution(my_string, n) {
    const answer = my_string.split('').map(el => el.repeat(n)).join('');
    return answer;
}