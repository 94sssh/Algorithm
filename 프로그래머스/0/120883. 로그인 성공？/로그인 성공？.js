function solution([id, pw], db) {
    let exist = false;
    
    for([dbid, dbpw] of db){
        if(dbid === id) {
            exist = true;
            if(dbpw === pw) return 'login'
        }      
    }  
    return exist ? 'wrong pw' : 'fail' ;
}