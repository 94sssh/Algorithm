function solution(phone_book) {
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        const current = phone_book[i];
        const next = phone_book[i+1];
        
        if(current[0] !== next[0]) continue;
        else if(current === next.slice(0, current.length)) return false;
    };
    
    return true;
}