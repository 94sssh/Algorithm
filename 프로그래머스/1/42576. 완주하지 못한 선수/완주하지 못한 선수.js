function solution(participants, completion) {
    const hash = {};
    
    for(const participant of participants) {
        hash[participant] = (hash[participant] || 0) + 1;
    }
    
    for(const complete of completion) hash[complete]--;
    
    for(key in hash) {
        if(hash[key] === 1) return key;
    }
}