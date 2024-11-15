function solution(answers) {
    const mark = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const supo = (mark) => answers.reduce((a, c, i) => c === mark[i % mark.length] ? a + 1 : a, 0);
        
    const scores = mark.map((el) => supo(el));
    const highest = Math.max(...scores);
    
    return scores.map((score, idx) => score === highest ? idx + 1 : false).filter(Boolean);
}