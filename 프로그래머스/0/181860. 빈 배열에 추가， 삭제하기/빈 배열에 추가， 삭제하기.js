function solution(arr, flag) {
    const push = (num, arr) => {
        for(let i=1; i<=num; i++) {
            arr.push(num);
            arr.push(num);
        }
    }
    
    const pop = (num, arr) => {
        for(let i=1; i<=num; i++) arr.pop();
    }
      
    return arr.reduce((a, c, i) => {
        flag[i] ? push(c, a) : pop(c, a);
        return a;
    }, []);
}