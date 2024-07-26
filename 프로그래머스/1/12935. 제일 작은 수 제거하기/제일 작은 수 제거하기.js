function solution(arr) {
    if(arr.length===1) return [-1];
    
    return arr.filter(el => el !== Math.min(...arr));
}