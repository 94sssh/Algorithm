function solution(arr1, arr2) {
    if(arr1.length > arr2.length) return 1;
    if(arr1.length < arr2.length) return -1;
    arr1 = arr1.reduce((acc, cur)=>{
       return acc+cur; 
    },0)
    arr2 = arr2.reduce((acc, cur)=>{
       return acc+cur; 
    },0)
    if(arr1 > arr2) return 1;
    if(arr1 < arr2) return -1;
    return 0
}