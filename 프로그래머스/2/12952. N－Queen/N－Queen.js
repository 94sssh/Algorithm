function solution(n) {
    let answer = 0;
    
    // 같은 행에는 퀸을 놓지 않는다.
    // 유망 함수
    // 같은 열이나 같은 대각선에 놓이는 지 확인
    
    // 대각선 체크
    // 열에서의 차이와 행에서의 차이가 같다. (절댓값으로 판단)
    
    const col = new Array(n + 1).fill(0);
    
    const promising = (i, column) => {
        let k = 1;
        
        while(k < i){
            if(col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k) return false;
            k++;
        }
        
        return true;
    };
    
    const nQueen = (i, column) => {
        if(promising(i, column)){
            if(i === n){
                answer++;
            } else {
                for(let j = 1; j <= n; j++){
                    column[i + 1] = j;
                    nQueen(i + 1, column);
                }
            }
        }
    }
    
    nQueen(0, col)
    
    return answer;
}