function solution(my_string, letter) {
    return my_string.split('').filter((el)=>el!==letter).join('');
}