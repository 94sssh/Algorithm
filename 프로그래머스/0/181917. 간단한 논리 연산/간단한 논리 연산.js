function solution(x1, x2, x3, x4) {
    const down = (x, y) => !x && !y ? false : true;
    const up = (x, y) => !!x && !!y ? true : false;
    
    return up(down(x1, x2), down(x3, x4));
}