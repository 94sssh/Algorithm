function solution(board, k) {
    return board.reduce((acc, cur, idx) => {
        return acc + cur.reduce((a, c, i) => a + (idx + i <= k ? c : 0), 0)
    }, 0)
}