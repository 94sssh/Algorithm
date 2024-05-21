function solution(dots) {
    const width = [];
    const height = [];
    
    dots.forEach((dot) => {
        width.push(dot[0]);
        height.push(dot[1]);
    })
    
    return (Math.max(...width) - Math.min(...width)) * (Math.max(...height) - Math.min(...height))
}