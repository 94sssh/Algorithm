function solution(myString) {
    let temp = (myString.split('x'));
    return temp.map((el)=>el.length);
}