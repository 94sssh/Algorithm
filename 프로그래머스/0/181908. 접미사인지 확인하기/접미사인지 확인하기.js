function solution(my_string, is_suffix) {
    const string = [...my_string].reverse();
    const suffix= [...is_suffix].reverse();
    const answer = suffix.map((el, i) => el === string[i]);
                           
    return answer.every(el => el) ? 1 : 0;
}