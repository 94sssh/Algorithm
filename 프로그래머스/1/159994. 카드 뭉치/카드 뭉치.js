function solution(cards1, cards2, goal) {
    let front = 0;
    let rear = goal.length;
    
    while(front !== rear){
        if(cards1[0] === goal[front]) {
            cards1.shift();
            front++;
        } else if (cards2[0] === goal[front]) {
            cards2.shift();
            front++;
        } else {
            return 'No';
        }
    }
    
    return 'Yes';
}