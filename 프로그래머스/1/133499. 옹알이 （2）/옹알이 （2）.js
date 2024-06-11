function solution(babbling) {
    return babbling.reduce((a, c) => {
        while(/^(aya|ye|woo|ma)/.test(c) && !/(ayaaya|yeye|woowoo|mama)/.test(c)){
            if(/^(aya|woo)/.test(c)) c = c.slice(3);
            if(/^(ye|ma)/.test(c)) c = c.slice(2);
        }
        return c.length === 0 ? a+1 : a;
    }, 0)
}