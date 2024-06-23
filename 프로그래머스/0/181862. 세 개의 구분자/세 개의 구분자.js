function solution(myStr) {
    return myStr.match(/[^abc]+/g) || ["EMPTY"];
}