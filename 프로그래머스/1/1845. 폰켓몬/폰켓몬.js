function solution(nums) {
    const select = nums.length / 2;
    const ponkemon = new Set(nums).size;
    return select > ponkemon ? ponkemon : select
}