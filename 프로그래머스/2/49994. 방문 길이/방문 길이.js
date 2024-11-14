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
            const road = `${newCoord[0]}${newCoord[1]}${coord[0]}${coord[1]}`;
            const reverseRoad = `${coord[0]}${coord[1]}${newCoord[0]}${newCoord[1]}`;
        
            if(!answer.includes(road)) answer.push(road);
            if(!answer.includes(reverseRoad)) answer.push(reverseRoad);
            
            coord = newCoord;
        }
    });
        
    return answer.length / 2;
}