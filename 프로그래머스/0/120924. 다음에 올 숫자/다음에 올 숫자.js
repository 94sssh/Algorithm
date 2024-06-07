function solution(common) {
    const first = common[1] - common[0];
    const second = common[2] - common[1];
    const diff = second - first;
        
    return diff === 0 ? common.at(-1) + first: common.at(-1) * second / first;
}