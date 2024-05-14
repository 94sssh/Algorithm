function solution(q, r, code) {    
    return [...code].reduce((acc, cur, idx) => idx % q === r ? acc += cur : acc, '')
}