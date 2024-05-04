function solution(arr, k) {
    const answer = [...new Set(arr)].slice(0, k);
    const length = answer.length;
    
    if(length < k){
        for(let i=1; i <= k - length; i++){
            answer.push(-1);
        }
    }
 
    return answer;
}