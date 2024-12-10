function solution(n,a,b)
{
    let round = 0;

    while(a !== b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }

    return round;
}

// 1 2 3 4 5 6 7 8 
//  1   2   3   4
//    1       2
//        1 끝