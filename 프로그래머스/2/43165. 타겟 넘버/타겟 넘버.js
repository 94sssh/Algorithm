function solution(numbers, target) {
    const answer = [];
    
    const dfs = (sum, idx) => {
        if(idx === numbers.length) {
            answer.push(sum);
            return;
        }
        
        const node = numbers[idx];
        dfs(sum + node, idx+1);
        dfs(sum + node * -1, idx+1);
    }
    
    dfs(0, 0);
    
    return answer.filter((el) => el === target).length;
}