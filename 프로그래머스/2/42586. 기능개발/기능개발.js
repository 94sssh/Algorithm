function solution(progresses, speeds) {
    const answer = [];
    let stack = [];
    
    const requiredTime = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

    requiredTime.forEach((time) => {
        if(time <= stack[0] || stack.length === 0){
            stack.push(time);
        } else {
            answer.push(stack.length);
            stack = [time];
        }
    })    
    
    answer.push(stack.length);
    
    return answer;
}