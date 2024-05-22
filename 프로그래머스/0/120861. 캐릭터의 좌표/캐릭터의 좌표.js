function solution(keyinput, board) {
    const [x, y] = board.map((coord) => Math.floor(coord/2));
    
    let arr = [0,0]
    
    const move = {
        up: () => arr[1] < y && arr[1]++,
        down: () => arr[1] > 0-y && arr[1]--,
        left: () => arr[0] > 0-x && arr[0]--,
        right: () => arr[0] < x && arr[0]++,
    }
    
    keyinput.forEach((key) => {
        move[key]();
    })
    
    return arr;
}