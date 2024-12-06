function solution(record) {
    const result = [];
    const uidList = {};
    
    record.forEach((log) => {
        const [action, uid, nickname] = log.split(' ');
        
        if(action === 'Enter' || action === 'Change') uidList[uid] = nickname;
    })
    
    record.forEach((log) => {
        const [action, uid, nickname] = log.split(' ');
        
        if(action === 'Enter') result.push(`${uidList[uid]}님이 들어왔습니다.`);
        if(action === 'Leave') result.push(`${uidList[uid]}님이 나갔습니다.`);
    })
    
    return result;
}