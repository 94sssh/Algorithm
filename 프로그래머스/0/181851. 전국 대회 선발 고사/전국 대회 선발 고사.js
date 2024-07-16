function solution(rank, attendance) {
    const student = rank.map((num, idx) => ({rank:num, num:idx, attendance: attendance[idx]})).sort((a, b) => a.rank - b.rank);
    
    const [a, b, c] = student.filter((el) => el.attendance).slice(0, 3).map((el) => el.num);
    
    return 10000 * a + 100 * b + c;
}