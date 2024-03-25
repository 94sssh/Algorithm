function solution(myString) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

    return [...myString].map((el)=>{
        return alphabet.indexOf(el) < 12 ? 'l' : el
    }).join('');
}