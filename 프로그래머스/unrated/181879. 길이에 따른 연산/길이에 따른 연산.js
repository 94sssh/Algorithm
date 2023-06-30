function solution(num_list) {
    var answer = 0;
    if(num_list.length>=11){
        answer = num_list.reduce((acc,cur)=>acc+cur);
    } else {
        answer = num_list.reduce((acc,cur)=>acc*cur, 1);
    }
    return answer;
}