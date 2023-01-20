function solution(s) {
    let callCount = 0;
    let zeroCount = 0;
    const removeZero = (n) => {
        callCount++
        zeroCount += n.length - n.match(/1/g).length;
        n = n.match(/1/g).join('').length.toString(2);
        if(n.length !== 1){
            removeZero(n);
        } else {
            return [callCount, zeroCount];
        }
    }
    removeZero(s);
    return [callCount, zeroCount];
}