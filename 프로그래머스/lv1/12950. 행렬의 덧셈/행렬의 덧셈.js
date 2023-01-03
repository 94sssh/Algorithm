function solution(arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<arr1.length; i++){
        const temp = [];
        for(let n=0; n<arr1[i].length; n++){
            temp.push(arr1[i][n]+arr2[i][n]);
        }
        answer.push(temp)
    }
    
    return answer;
}