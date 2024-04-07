function solution(x1, x2, x3, x4) {
    const down = (x, y) => x === false && y === false ? false : true;
    const up = (x, y) => x === true && y === true ? true : false;
    
    return up(down(x1, x2), down(x3, x4));
}