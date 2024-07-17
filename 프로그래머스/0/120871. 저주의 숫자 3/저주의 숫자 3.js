function solution(n) {
    let idx = 0;
    const answer = new Array(n).fill(0).map((_, i)=>{
        idx += 1;
        while(String(idx).includes('3') || idx % 3 === 0){
            idx++;
        }
        return idx;
    })
    
    return answer.at(-1);
}