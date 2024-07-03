function solution(board) {
    const mine = [];
    board.forEach((map, y) => {
        map.forEach((area, x) => {
            if(area === 1) mine.push([y, x]);
        })
    })
    
    mine.forEach(([y, x]) => {
        const minusX = x - 1 >= 0 ? x - 1 : x;
        const plusX = x + 1 < board.length ? x + 1 : x;
        const minusY = y - 1 >= 0 ? y - 1 : y;
        const plusY = y + 1 < board.length ? y + 1 : y;
                board[minusY][minusX] = 1;
                board[minusY][x] = 1;
                board[minusY][plusX] = 1;
        
                board[y][minusX] = 1;
                board[y][plusX] = 1;
        
                board[plusY][minusX] = 1;
                board[plusY][x] = 1;
                board[plusY][plusX] = 1;
    })
    
    return board.flat().filter(el => el === 0).length;
};