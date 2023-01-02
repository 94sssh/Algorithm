function solution(numbers) {
    var arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    return Number(numbers.match(/zero|one|two|three|four|five|six|seven|eight|nine/g).map(el=>arr.indexOf(el)).join(''))
}