function solution(my_string) {
    let answer = [];
    
    for(let i=my_string.length; i > 0; i--){
        answer.push(my_string.slice(i-1))
    }
    
    return answer.sort();
}