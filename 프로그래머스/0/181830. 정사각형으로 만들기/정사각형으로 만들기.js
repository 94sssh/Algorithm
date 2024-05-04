function solution(arr) {
    const rows = arr.length;
    const columns = arr[0].length;
    const gap = Math.abs(rows-columns);
    
    if(rows === columns) return arr;
    
    if(rows > columns) arr.forEach((el) => {
        for(let i=1; i<=gap; i++) el.push(0)
    })
    else for(let i=1; i<= gap; i++) arr.push(Array(columns).fill(0));
    
    return arr;
}