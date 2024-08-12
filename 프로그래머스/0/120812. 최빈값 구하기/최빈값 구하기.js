function solution(array) {
    if(array.length === 1) return array[0];
    
    const obj = array.reduce((acc, cur) => {
        acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
        return acc;
    }, {});
    
    const sortedArray = Object.entries(obj).sort((a, b) => b[1] - a[1]);
        
    if(sortedArray.length === 1) return Number(sortedArray[0][0]);
    
    if (sortedArray[0][1] === sortedArray[1][1]) return -1;
    
    return Number(sortedArray[0][0]);
};