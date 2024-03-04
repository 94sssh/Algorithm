function solution(strArr) {
    return strArr.map((el,idx)=>{
        return idx%2===1 ? el.toUpperCase() : el.toLowerCase() 
    });
}