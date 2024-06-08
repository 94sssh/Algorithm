function solution(lines) {
    const lineObj = {};
    
    lines.forEach((line) => {
        line.sort((a, b) => a - b);
        for(let i = line[0]; i<line[1]; i++){
            if(!lineObj[i]) lineObj[i] = 1;
            else lineObj[i]++;
        }
    })
    
    return Object.values(lineObj).filter((el)=>el>1).length;
}