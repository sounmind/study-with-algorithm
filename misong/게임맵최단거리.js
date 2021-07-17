// https://programmers.co.kr/learn/courses/30/lessons/1844
// BFS로 최단거리 구하기

function solution(maps) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const n = maps.length;
    const m = maps[0].length;
    const queue = [];
    let answer = 1;
    let visited = maps.map((row) => row.map((value) => 0));
    
    queue.push([0, 0]);
    visited[0][0] = 1;
 
    while (queue.length > 0) {
        let aroundStep = queue.length;
        
        for (let i = 0; i < aroundStep; i++) {
            const [x, y] = queue.shift();
        
            for (let k = 0; k < 4; k++) {
                const nx = x + dx[k];
                const ny = y + dy[k];

                if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && visited[nx][ny] === 0) {
                    if (nx === n - 1 && ny === m - 1) {
                        return answer + 1;
                    }
                    queue.push([nx, ny]);
                    visited[nx][ny] = 1;
                }
            }
        }
        answer++;
    }
    
    return -1;
}
