function solution(people, limit) {
    let boat = 0;
    people.sort((a, b) => a - b);
    
    while(people[0] <= people.at(-1)) {
        if(people[0] + people.at(-1) <= limit) people.shift();
        people.pop();
        boat++;
    }
    
    return boat;
}
