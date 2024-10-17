const findCoord = (num) => {
        if(num === '*') return [3, 0];
        if(num === 0) return [3, 1];
        if(num === '#') return [3, 2];
        return [Math.floor((num-1) / (3)), (num-1) % 3];
}

function solution(numbers, hand) {
    let leftPosition = '*';
    let rightPosition = '#';
    
    return numbers.reduce((a, c, i) => {
        if(c % 3 === 1) {
            leftPosition = c;
            return a += 'L';
        } else if(c !==0 && c % 3 === 0) {
            rightPosition = c;
            return a += 'R';
        };
        
        const currentCoord = findCoord(c);
        const leftCoord = findCoord(leftPosition);
        const rightCoord = findCoord(rightPosition);
        
        const leftDiff = Math.abs(currentCoord[0]-leftCoord[0]) + Math.abs(currentCoord[1]-leftCoord[1])
        const rightDiff = Math.abs(currentCoord[0]-rightCoord[0]) + Math.abs(currentCoord[1]-rightCoord[1])
          
        if(leftDiff > rightDiff) {
            rightPosition = c;
            return a += 'R';
        } else if(leftDiff < rightDiff) {
            leftPosition = c;
            return a += 'L';
        } else {
            if(hand === 'right'){
                rightPosition = c;
                return a += 'R';
            } else {
                leftPosition = c;
                return a += 'L';
            }
        }
    }, '');    
}