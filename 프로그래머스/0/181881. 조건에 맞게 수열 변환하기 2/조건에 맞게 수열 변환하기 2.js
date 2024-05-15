function solution(arr) {
    let previous = [];
    let count = 0;
    
    while(JSON.stringify(previous) !== JSON.stringify(arr)){
        previous = arr;
        arr = arr.map((el)=>{
            if(el >= 50 && el%2===0) return el/2;
            if (el<50 && el%2===1) return el*2 + 1;
            return el;
        })
        if(previous.every((el, idx) => el === arr[idx])) return count;
        count++;
    }
    
    return count;
}