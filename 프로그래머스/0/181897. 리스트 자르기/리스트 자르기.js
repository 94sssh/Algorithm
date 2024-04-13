function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    if(n === 1) return num_list.slice(0, b+1);
    if(n === 2) return num_list.slice(a);
    if(n === 3) return num_list.slice(a, b+1);
    if(n === 4) return num_list.slice(a, b+1).filter((_, idx)=>idx===0 || idx%c===0);
}