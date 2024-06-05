function solution(answers) {
    const mark1 = [1, 2, 3, 4, 5];
    const mark2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const mark3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const supo = (mark, arr = answers) => {
        let answer = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]===mark[i%mark.length]) answer++;
        }   
        return answer;

    }
    const scores = [supo(mark1), supo(mark2), supo(mark3)];
    const highest = Math.max(...scores);
    
    return scores.map((score, idx) => score === highest ? idx + 1 : false).filter(Boolean);
}