function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    moves.forEach((move) => {
        for(let i = 0; i < board.length; i++){
            const doll = board[i][move - 1];
            
            if(doll !== 0){
                if(stack.at(-1) === doll) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(doll);
                }
                board[i][move - 1] = 0;
                break;
            };
        };
    });
    
    return answer;
}