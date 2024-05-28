function solution(arr) {
    if(arr.length === 1) return arr;
    
    let length = 2;
    while(arr.length > length) length *= 2;
 
    return arr.length === length ? arr : arr.concat(new Array(length - arr.length).fill(0));
}