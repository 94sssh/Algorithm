function solution(array) {
    const answer = array.sort((a,b) => a - b);
    return answer[(array.length-1)/2];
}