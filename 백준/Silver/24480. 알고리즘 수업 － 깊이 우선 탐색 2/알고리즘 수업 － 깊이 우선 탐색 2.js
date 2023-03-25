const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [vertexes, edges, start] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 1; i <= vertexes; i++) {
  graph.push([]);
}

const visited = new Array(vertexes + 1).fill(false);

for (let i = 1; i <= edges; i++) {
  const edge = input[i].split(' ').map(Number);
  graph[edge[0] - 1].push(edge[1]);
  graph[edge[1] - 1].push(edge[0]);
}

graph.filter((el) => el.sort((a, b) => b - a));

const result = [];
for (let i = 1; i <= vertexes; i++) {
  result.push(0);
}

let count = 1;
const dfs = (idx) => {
  visited[idx] = true;
  result[idx - 1] = count++;
  for (let key of graph[idx - 1]) {
    if (visited[key] === false) {
      dfs(key);
    }
  }
};

dfs(start);

console.log(result.join('\n'));
