function solution(X, Y) {
    const numX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const numY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    [...X].forEach((x) => numX[x]++);
    [...Y].forEach((y) => numY[y]++);
    
    let answer = '';
    
    for(let i=9; i>=0; i--){
        if(numX[i] !== 0 && numY[i] !== 0){
            const minNum = Math.min(numX[i], numY[i]);
            for(let j=1; j<=minNum; j++){
                if(answer !== '0') answer += i;
            };
        };    
    };
    
    return answer ? answer : '-1';
}