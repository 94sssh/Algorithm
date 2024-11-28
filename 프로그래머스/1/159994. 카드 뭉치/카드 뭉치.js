function solution(cards1, cards2, goal) {
    for(const card of goal){
        if(cards1[0] === card) cards1.shift();
        else if (cards2[0] === card) cards2.shift();
        else return 'No';
    };
    return 'Yes'
}