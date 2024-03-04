function solution(num_list) {
    let evenNum = '';
    let oddNum = '';
    num_list.forEach((num)=>{
        num % 2 === 1 ? evenNum += num : oddNum += num;
    })
    return +evenNum + +oddNum;
}