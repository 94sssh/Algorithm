function solution(s, n) {
    return [...s].map((c) => {
        if(c === ' ') return ' ';
        const idx = c.charCodeAt();
        if(idx >= 65 && idx<= 90 && idx + n> 90) return String.fromCharCode(idx + n - 26);
        if(idx+ n > 122) return String.fromCharCode(idx + n - 26);
        return String.fromCharCode(idx + n);
    }).join('');
}