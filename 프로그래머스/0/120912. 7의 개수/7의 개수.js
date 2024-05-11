function solution(array) {
    return array.join('').match(/7/g) ? array.join('').match(/7/g).length : 0 ;
}