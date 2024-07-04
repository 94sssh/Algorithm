function solution(code) {
    let ret = ''
    let mode = 0;
    
    [...code].forEach((c, i) => {
        if(mode === 0){
            if(c === '1') mode = 1;
            else if(i % 2 === 0) ret += c;
        } else {
            if(c === '1') mode = 0;
            else if(i % 2 === 1) ret += c;
        }
    })
    
    return ret || 'EMPTY';
}