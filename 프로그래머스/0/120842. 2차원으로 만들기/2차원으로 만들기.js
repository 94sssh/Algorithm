function solution(num_list, n) {
    let tempArr = [];
    
    return num_list.reduce((a, c) => {
        tempArr.push(c);
        if(tempArr.length === n){
            a.push(tempArr);
            tempArr = [];
        } 
        return a;
    },[]);
}