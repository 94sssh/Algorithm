function solution(sides) {
    let answer = 0;
    const [side1, side2] = sides.sort((a,b) => a-b);

    for(let i = side2 - side1 + 1; i <= side2; i++) answer++;
    for(let i = side2 + 1; i < side1 + side2; i++) answer++;
    
    return answer;
}