function solution(my_string, alp) {
    let result = my_string.split('')
    for(let i=0; i<result.length; i++){
        if(result[i]===alp){
            result[i] = result[i].toUpperCase();
        }
    }
    return result.join('');
}