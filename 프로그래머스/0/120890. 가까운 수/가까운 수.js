function solution(array, n) {
    return array.sort((a,b)=>a-b).reduce((acc, cur)=>{
        return Math.abs(cur - n) >= Math.abs(acc - n) ? acc : cur;
    });
}