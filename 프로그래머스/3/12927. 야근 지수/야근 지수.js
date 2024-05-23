function solution(n, works) {    
    for(let i=1; i<=n; i++){
        // const overtime = Math.max(...works);
        
        const overtime = works.reduce((max, current) => {
            return current > max ? current : max;
        }, works[0]);
        
        if(overtime === 0) return 0;
        works[works.indexOf(overtime)]--;
    }
    
    return works.reduce((acc, cur) => {
        return cur > 0 ? acc += cur**2 : acc;
    }, 0);
}