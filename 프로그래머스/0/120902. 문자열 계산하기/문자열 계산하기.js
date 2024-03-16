function solution(my_string) {
    const stringArr = my_string.split(' ');
    let answer = +stringArr[0];
    
    for(let i=1; i<stringArr.length; i+=2){
        if(stringArr[i]==='+') answer += +stringArr[i+1];
        else answer -= +stringArr[i+1];
    }
    
    return answer;
}