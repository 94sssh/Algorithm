function solution(maps) {
    // [[1,0,1,1,1],
    //  [1,0,1,0,1],
    //  [1,0,1,1,1],
    //  [1,1,1,0,1],
    //  [0,0,0,0,1]]
    // 지도와 다르게 경로에 이동거리를 저장할 이중 배열 필요
    // 이중 배열의 마지막 인덱스 arr[n][m]을 return 해야 하는데, 도달 못할 시에는 -1을 리턴
    
    const n = maps.length;
    const m = maps[0].length;
    // const steps = new Array(n).fill(new Array(m).fill(-1));로 하면 같은 축의 원소가 모두 한 번에 바뀌는 문제
    const steps = Array.from({length: n}, () => new Array(m).fill(-1));
    
    const move = [[-1, 0], [0, -1], [0, 1], [1, 0]]; // 위, 왼쪽, 오른쪽, 아래 (이해 안됨 - 순서 바뀌면 안되는 이유, 중요한 방향이 마지막에 결정되야해서?)
    
    const queue = [[0, 0]]; // 현재 위치를 저장
    let front = 0;
    let rear = 1;
    
    steps[0][0] = 1;
        
    while(front !== rear){
        const coord = queue[front];
        front++;
            
        for(let i = 0; i < move.length; i++){
            const row = coord[0] + move[i][0];
            const col = coord[1] + move[i][1];
                
            if(row < 0 || row >= n || col < 0 || col >= m) continue; // 범위 벗어나면 다음 순서로 돌게 통과
            if(maps[row][col] === 0) continue; // 벽이 있으면 아래 오른쪽 위 왼쪽 순으로 돌게 통과
                
            if(steps[row][col] === -1) { // 첫 방문
                queue.push([row, col]);
                rear++;
                steps[row][col] = steps[coord[0]][coord[1]] + 1; // 직전까지의 스텝 수에 1 더해서 현재 지나는 좌표에 저장
            };
        };
    };
    
    return steps[n - 1][m - 1];
}