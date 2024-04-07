function solution(myString, pat) {
    let answer = 0;
    
    for(let i=0; i<=myString.length-pat.length; i++){
        if(myString.slice(i, i+pat.length) === pat) answer++;
    }
    
    return answer;
}