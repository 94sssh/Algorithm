function solution(dirs) {
    const answer = [];
    
    let coord = [5, 5];
    
    [...dirs].forEach((dir) => {
        const newCoord = [...coord];
        
        if(dir === 'U') newCoord[0]++;
        if(dir === 'D') newCoord[0]--;
        if(dir === 'R') newCoord[1]++;
        if(dir === 'L') newCoord[1]--;
        
        if(newCoord[0] >= 0 && newCoord[0] <= 10 && newCoord[1] >= 0 && newCoord[1] <= 10){
            const front = [newCoord[0], coord[0]].sort((a, b) => a - b);
            const rear = [newCoord[1], coord[1]].sort((a, b) => a - b);
            
            const road = `${front}${rear}`;
        
            if(!answer.includes(road)) answer.push(road);
            
            coord = newCoord;
        }
    });
        
    return answer.length;
}