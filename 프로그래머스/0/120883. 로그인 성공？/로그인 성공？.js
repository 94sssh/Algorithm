function solution([id, pw], db) {
    let exist = false;
    
    for(info of db){
        if(info[0] === id) {
            exist = true;
            if(info[1] === pw) return 'login'
        }
        
    }
    
    return exist ? 'wrong pw' : 'fail' ;
}