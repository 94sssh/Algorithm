function solution(n, wires) {
    const network = new Array(n + 1).fill(0).map(() => []);
    
    wires.forEach(([a, b]) => {
        network[a].push(b);
        network[b].push(a);
    })
    
    const dfs = (parent, child) => {
        let line = 1;
            
        network[parent].forEach((node) => {
            if(node !== child) line += dfs(node, parent);
        });
            
        return line;
    }
    
    return wires.reduce((acc, [a, b]) => {
        const diff = Math.abs(2 * dfs(a, b) - n);
        return diff < acc ? diff : acc;
    }, n);
}