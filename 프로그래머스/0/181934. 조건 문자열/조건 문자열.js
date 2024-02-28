function solution(ineq, eq, n, m) {
    if(ineq==='<'){
        if(eq==='='){
            return n <= m ? 1 : 0;
        } else {
            return n < m ? 1 : 0;
        }
    } else {
        if(eq==='='){
            return n >= m ? 1 : 0;
        } else {
            return n > m ? 1 : 0;
        }
    }
}