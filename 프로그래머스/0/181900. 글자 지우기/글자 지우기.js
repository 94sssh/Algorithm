function solution(my_string, indices) {
    return [...my_string].reduce((a, c, i) => indices.includes(i) ? a : a + c, '');
}