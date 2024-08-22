function solution(arr) {
    return arr.reduce((a, c, i) => {
        if(arr[i] !== arr[i+1]) a.push(c);
        return a;
    }, []);
}