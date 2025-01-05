function solution(n, wires) {
    let answer = n;
    const network = [];
    for(let i = 0; i <= n; i++) network.push([]);
    
    // dfs로 network를 돌면서 차이 구하기
    // 간선이 하나씩 빠진 상태로 dfs 돌면서 나온 값을 계속해서 diff랑 비교
        
    // dfs를 시작할 parent 노드를 받고,
    // dfs를 돌다가 간선이 연결된 부모 노드로 다시 돌아가는 일이 없도록 다시 child를 만나면 돌아가지 않도록 조건문 처리
    const dfs = (parent, child) => {
        let line = 1;
            
        network[parent].forEach((node) => {
            // 재귀 들어가면서 자식인 node를 parent로 넘겨주고, 기존 부모를 다시 만나지 않도록 두번째 인자로 parent 달
            if(node !== child) line += dfs(node, parent);
        });
            
        return line;
    }
    
    // 먼저 그래프 만들기
    wires.forEach(([a, b]) => {
        network[a].push(b);
        network[b].push(a);
    })
    
    // wires에서 한 요소씩 반복하면서 간선 일시적으로 끊고 dfs 하기
    wires.forEach(([a, b]) => {
        network[a] = network[a].filter((el) => el !== b);
        network[b] = network[b].filter((el) => el !== a);
        
        // 간선 빼서 나눈 그래프 towers를 dfs를 돌아서 나온 값(diff)를 answer랑 비교
        // 송전탑 개수
        const towers = dfs(a, b);
        
        // diff 구하기
        const diff = Math.abs(2 * towers - n);
        
        // diff랑 answer랑 비교해서 작은 값을 절대값으로 저장
        answer = diff < answer ? diff : answer;
        
        // 다시 간선 추가해서 복구
        network[a].push(b);
        network[b].push(a);
    })
    
    return answer;
}