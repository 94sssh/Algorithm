function solution(n, m, section) {
    let count = 0;
    let wall = new Array(n).fill(1).map((_, i) => section.includes(i+1) ? 0 : 1);

    while(!wall.every((el)=>el)){
        const idx = wall.indexOf(0);

        for(let i = wall.indexOf(0); i < idx + m; i++){
            if(i < n && wall[i]===0) wall[i] = 1;
        }
        count++;
    }
    return count;
}