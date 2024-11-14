function solution(N, stages) {
    const answer = {};
    
    stages.sort((a, b) => b - a);
    
    for(let i = 1; i <= N; i++){
        let stage = 0;
        const length = stages.length;
        
        while(stages.at(-1) === i){
            stages.pop();
            stage++;
        }
        
        answer[i] = stage / length;
    }
    
    return Object.entries(answer).sort((a, b) => b[1] - a[1]).map((el) => +el[0]);
}