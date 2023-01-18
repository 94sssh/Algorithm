function solution(cipher, code) {
    const result = [];
    for(let i=code-1; i<cipher.length; i+=code){
        result.push(cipher[i])
    }
    return result.join('')
}