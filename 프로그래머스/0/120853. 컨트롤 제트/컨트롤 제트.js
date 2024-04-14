function solution(s) {
    const arr = s.split(' ');
    return arr.reduce((a, c, idx) =>{
        return c === 'Z' ? +a - +arr[idx-1] : +a + +c;
    }, 0)
}