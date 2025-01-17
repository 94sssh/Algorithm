function solution(k, dungeons) {
    const dfs = (fatigue, dungeons) => {
        let maxDungeons = 0;
        
        for(let i = 0; i < dungeons.length; i++) {
            const [necessity, consumption] = dungeons[i];
            
            // 피로도가 남아있어야 함, 방문하지 않았어야 함
            // 현재 위치를 방문 처리해야 이후 dfs로 넘어갔을 때, 다시 방문하지 않음
            // 방문 처리를 각각 넘기지 않으면 모든 던전이 방문 처리 되므로, 각각 넘겨주고
            // 방문 처리햇던 것을 초기화하여 관리
            if(fatigue >= necessity) {
                const count = 1 + dfs(fatigue - consumption, [...dungeons.slice(0, i), ...dungeons.slice(i + 1)]);
                maxDungeons = Math.max(maxDungeons, count);
            };
        };
        
        return maxDungeons;
    };
    
    return dfs(k, dungeons);
}