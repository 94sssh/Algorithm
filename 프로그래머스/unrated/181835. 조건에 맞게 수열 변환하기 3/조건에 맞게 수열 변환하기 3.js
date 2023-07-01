function solution(arr, k) {
    if(k%2===1){
        return arr.map(el=>el*k);
    } else {
        return arr.map(el=>el+k);
    }
}