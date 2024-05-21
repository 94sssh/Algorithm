function solution(dots) {
    let width = [];
    let height = [];
    for(let i=0; i<dots.length; i++){
        width.push(dots[i][0]);
        height.push(dots[i][1]);
    }
    width = width.sort((a,b)=>a-b);
    height = height.sort((a,b)=>a-b);
    return (width.at(-1)-width[0])*(height.at(-1)-height[0])
}