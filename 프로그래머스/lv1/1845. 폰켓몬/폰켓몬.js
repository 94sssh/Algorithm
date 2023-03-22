function solution(nums) {
    let choose = nums.length/2;
    let ponkemon = [...new Set(nums)].length;
    return choose > ponkemon ? ponkemon : choose
}