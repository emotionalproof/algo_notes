class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    checkVertex(name) {
        return this.adjacencyList.hasOwnProperty(name);
    }

    addVertex(name) {
        if (!this.checkVertex(name)) {
            this.adjacencyList[name] = [];
        }
    }

    checkEdge(v1, v2) {
        if (!this.checkVertex(v1) || !this.checkVertex(v2)) return false;
        if (
            this.adjacencyList[v1].includes(v2) ||
            this.adjacencyList[v2].includes(v1)
        ) {
            return true;
        } else {
            return false;
        }
    }

    addEdge(v1, v2) {
        if (this.checkEdge(v1, v2)) return false;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        if (!this.checkEdge(v1, v2)) return;
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }

    removeVertex(v) {
        if (!this.checkVertex(v)) return;
        while (this.adjacencyList[v].length) {
            let neighbor = this.adjacencyList[v].pop();
            this.removeEdge(v, neighbor);
        }
        delete this.adjacencyList[v];
    }

    dfsRec(start) {
        let visited = {};
        let result = [];
        const traverse = (start) => {
            if (!visited[start]) {
                visited[start] = true;
                result.push(start);
                for (const neighbor of this.adjacencyList[start]) {
                    if (!visited[neighbor]) {
                        traverse(neighbor);
                    }
                }
            }
        };
        traverse(start);
        return result;
    }

    dfsIt(start) {
        let stack = [start];
        let visited = new Set();
        let result = [];
        while (stack.length) {
            let vertex = stack.pop();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                for (const neighbor of this.adjacencyList[vertex]) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return result;
    }

    bfs(start) {
        if (!this.checkVertex(start)) return false;
        const queue = [start];
        const visited = new Set();
        const result = [];
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        return result;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    da(start, end) {
        const distances = {};
        const previous = {};
        const queue = [];
        const vertices = Object.keys(this.adjacencyList);

        // Initialize distances and previous
        for (const vertex of vertices) {
            distances[vertex] = vertex === start ? 0 : Infinity;
            previous[vertex] = null;
            queue.push(vertex);
        }
        while (queue.length > 0) {
            // Get the vertex with the smallest distance
            queue.sort((a, b) => distances[a] - distances[b]);
            let current = queue.shift();

            if (current === end) {
                // Build path
                const path = [];
                let temp = end;
                while (temp) {
                    path.unshift(temp);
                    temp = previous[temp];
                }
                return { distance: distances[end], path };
            }

            for (const neighbor of this.adjacencyList[current]) {
                const alt = distances[current] + neighbor.weight;
                if (alt < distances[neighbor.node]) {
                    distances[neighbor.node] = alt;
                    previous[neighbor.node] = current;
                }
                console.log({ distances, previous, queue });
            }
        }
        return { distance: Infinity, path: [] };
    }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("B", "E", 3);
g.addEdge("E", "D", 3);
g.addEdge("A", "C", 2);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.da("A", "E"));

// Algorithm Approach
// 1. every time we look to visit a new node,
// we pick the node with the smallest known distance to visit first
// 2. Once we've moved to the node we're going to visit,
//      we look at each of its neighbors
// 3. For each neighboring node
// we calculate the distance by summing the total edges
// that lead to the node we're checking, from the starting node
// 4. If the new total distance to a node is less than the previous total,
// we store the new shorter distance for that node
