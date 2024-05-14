function solution(my_string, overwrite_string, s) {
    const temp = my_string.split('');
    let idx = 0;
    
    for(let i=s; i<overwrite_string.length + s; i++){
        temp[i] = overwrite_string[idx++];
    }
    
    return temp.join('');
}