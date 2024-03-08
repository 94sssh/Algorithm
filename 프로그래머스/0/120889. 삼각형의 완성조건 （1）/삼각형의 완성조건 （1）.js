function solution(sides) {
    const [side1, side2, side3] = sides.sort((a,b) => a-b);
    return side3 < side1 + side2 ? 1 : 2;
}