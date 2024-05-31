function solution(n, slicer, num_list) {
    const [s, e, k] = slicer;
    if(n === 1) return num_list.slice(0, e+1);
    if(n === 2) return num_list.slice(s);
    if(n === 3) return num_list.slice(s, e+1);
    if(n === 4) return num_list.slice(s, e+1).filter((_, idx) => idx===0 || idx%k===0);
}