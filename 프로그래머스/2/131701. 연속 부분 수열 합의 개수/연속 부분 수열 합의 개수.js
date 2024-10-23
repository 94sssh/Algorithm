function solution(elements) {
    const answer = new Set();
    
    const findSum = (arr, length) => {
        for(let i = 0; i < elements.length; i++){
            answer.add(arr.slice(i, i + length).reduce((a, c) => a + c, 0));
        }
    }
    
    elements.forEach((el, i) => {
        findSum([...elements, ...elements], i + 1)
    })
    
    return answer.size;
}