function solution(lottos, win_nums) {
    const win = lottos.filter((num) => win_nums.includes(num)).length;
    const zero = lottos.filter(el => el === 0).length;
    
    if(zero === 6) return [1, 6];
    if(win === 0) return [6, 6];
    if(zero === 0) return [7-win, 7-win];


    
    const highest = 7-win-zero;
    const lowest = 7-win;
      
    return [highest, lowest];
}