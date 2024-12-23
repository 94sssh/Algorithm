function solution(new_id) {
    let change_id = new_id.toLowerCase()
                            .replace(/[^\w\-\.]/g, '')
                            .replace(/\.{2,}/g, '.')
                            .replace(/^\.|\.$]/g, '')
                            .slice(0, 15)
                            .replace(/\.$/g, '')
    
    if(!change_id) change_id = 'a';
    
    while(change_id.length < 3){
        change_id += change_id.at(-1);
    }
    
    return change_id;
}