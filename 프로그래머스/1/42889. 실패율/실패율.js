function solution(N, stages) {
    let leftStages = stages.length;
    const failureRateObj = {};
    
    for(let i=1; i<=N; i++){
        failureRateObj[i] = (stages.filter((el) => el === i).length)/leftStages;
        leftStages -= stages.filter((el) => el === i).length;
    }
    
    return Object.entries(failureRateObj).sort((a, b) => b[1] - a[1]).map((el) => +el[0]);
}