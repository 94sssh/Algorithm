function solution(s) {
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    for(let i=0; i<arr.length; i++){
        let pattern = `${arr[i]}`;
        let regexAll = new RegExp(pattern, "g");
        s=s.replace(regexAll, i); 
    }
    return parseInt(s)
}