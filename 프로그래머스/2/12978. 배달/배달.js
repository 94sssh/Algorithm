function solution(N, road, K) {
    // 최소 비용을 저장할 공간은 매우 큰 값으로 초기화, infinity로 초기화
    const times = new Array(N + 1).fill(Infinity);
    
    // 마을별로 도로 연결, 배열로 다음 연결된 마을과 도로의 시간을 저장
    const town = times.map(() => []);
    
    road.forEach(([a, b, time]) => {
        town[a].push([b, time]);
        town[b].push([a, time]);
    });
    
    // 시작 노드 설정, 시작 노드로부터 특정 노드까지 최소 비용 저장할 공간과 직전 노드를 저장할 공간을 마련
    // 시작 노드의 직전 노드는 자신, 최소 비용은 0
    const queue = [[1, 0]];
    times[1] = 0;
        
    // 큐로 현재 마을에서 연결되어 있는 마을(아직 방문하지 않은 노드)을 순차적으로 돌면서 최소거리 갱신
    // 각 노드까지 가는 최소 비용과 현재까지 구한 최소 비용을 비교하여 작은 값을 각 노드의 최소 비용으로 갱신
    while(queue.length) {
        const [prevnode, prevtime] = queue.pop();
        
        town[prevnode].forEach(([nextnode, nexttime]) => {
            if(times[nextnode] > times[prevnode] + nexttime && times[prevnode] + nexttime <= K) {
                times[nextnode] = times[prevnode] + nexttime;
                queue.push([nextnode, nexttime]);
            };
        });
    };

    // 1에서 출발해 각 마을까지의 최소 시간이 담긴 times 배열이 되었으므로 K보다 작은 마을만 필터해 길이 리턴
    return times.filter((time) => time <= K).length;
}