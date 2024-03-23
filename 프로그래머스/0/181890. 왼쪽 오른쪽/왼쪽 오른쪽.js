function solution(str_list) {
    const answer = [];
    
    for(let i=0; i<str_list.length; i++){
        if(str_list[i] === 'l') {
            answer.push(...str_list.slice(0, i));
            return answer;
        }
        else if(str_list[i] === 'r') {
            answer.push(...str_list.slice(i+1));
            return answer;
        }
    }
    
    return answer;
}