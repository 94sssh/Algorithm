function solution(elements) {
    const answer = new Set();
    
    const arr = [...elements, ...elements];
    
    elements.forEach((_, i) => {
        elements.forEach((_, idx) => {
            answer.add(arr.slice(i, idx + i + 1).reduce((a, c) => a + c, 0));
        })
    })
    
    return answer.size;
}