function solution(n_str) {
    if(n_str[0] !== '0') return n_str;
    
    const arr = [...n_str];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== '0') return arr.slice(i).join('');
    }
}