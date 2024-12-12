function solution(maps) {
    const xLength = maps[0].length;
    const yLength = maps.length;
    
    const [startCoord, leverCoord, endCoord] = maps.reduce((a, c, i) => {
        if(c.includes('S')) a[0] = [i, c.indexOf('S')];
        if(c.includes('L')) a[1] = [i, c.indexOf('L')];
        if(c.includes('E')) a[2] = [i, c.indexOf('E')];
        return a;
    }, []);
            
    const findPath = (start, [endY, endX], step) => {
        const visitedMaps = maps.map((map) => [...map]);
        
        const leftPath = [[...start, 0]];
        
        const isMoveable = (y, x) => {
            return y >= 0 && x < xLength && y < yLength && x >= 0 && visitedMaps[y][x] !== 'X';
        }
        
        const movePath = (y, x, step) => {
            leftPath.push([y, x, step]);
            visitedMaps[y][x] = 'X';
        }
        
        while(leftPath.length !== 0){
            const [y, x, step] = leftPath.shift();
            
            if(y === endY && x === endX){
                return step;
            }
            
            [[y - 1, x], [y, x + 1], [y + 1, x], [y, x - 1]].forEach((coord) => {
                if(isMoveable(...coord)) movePath(...coord, step + 1);
            })
        }
    }
    
    const startPath = findPath(startCoord, leverCoord, 0);
    const endPath = findPath(leverCoord, endCoord, 0);
    
    return startPath + endPath ? startPath + endPath : -1;
}