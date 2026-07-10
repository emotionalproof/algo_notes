class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    checkVertex(v) {
        return this.adjacencyList.has(v);
    }

    checkEdge(v1, v2) {
        if (!this.checkVertex(v1) || !this.checkVertex(v2)) {
            return false;
        }
        if (
            this.adjacencyList.get(v1).includes(v2) ||
            this.adjacencyList.get(v2).includes(v1)
        ) {
            return true;
        }
    }

    addVertex(v) {
        !this.checkVertex(v) && this.adjacencyList.set(v, []);
    }

    addEdge(v1, v2) {
        if (!this.checkEdge(v1, v2)) {
            this.adjacencyList.get(v1).push(v2);
            this.adjacencyList.get(v2).push(v1);
        }
    }

    removeEdge(v1, v2) {
        if (!this.checkEdge(v1, v2)) {
            return;
        } else {
            this.adjacencyList.set(
                v1,
                this.adjacencyList.get(v1).filter((v) => v != v2)
            );
            this.adjacencyList.set(
                v2,
                this.adjacencyList.get(v2).filter((v) => v !== v1)
            );
        }
    }

    removeVertex(v) {
        if (!this.checkVertex(v)) {
            return false;
        } else {
            while (this.adjacencyList.get(v).length) {
                let adjacentVertex = this.adjacencyList.get(v).pop();
                this.removeEdge(v, adjacentVertex);
            }
            this.adjacencyList.delete(v);
            return true;
        }
    }

    dfsRec(start) {
        let visited = new Set();
        let result = [];
        const traverse = (vertex) => {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                for (const neighbor of this.adjacencyList.get(vertex)) {
                    traverse(neighbor);
                }
            }
        };
        traverse(start);
        return result;
    }

    dfsRec1(start) {
        const visited = new Set();
        const result = [];
        const traverse = (start) => {
            if (!visited.has(start)) {
                visited.add(start);
                result.push(start);
                const neighbors = this.adjacencyList.get(start);
                for (let i = 0; i < neighbors.length; i++) {
                    const neighbor = neighbors[i];
                    traverse(neighbor);
                }
            }
        };
        traverse(start);
        return result;
    }

    dfsIt(start) {
        if (!this.checkVertex(start)) return false;
        const stack = [start];
        const visited = new Set();
        const result = [];
        while (stack.length > 0) {
            const vertex = stack.pop();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);
                const neighbors = this.adjacencyList.get(vertex);
                for (let i = neighbors.length - 1; i >= 0; i--) {
                    const neighbor = neighbors[i];
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return result;
    }

    bfsIt(start) {
        if (!this.checkVertex(start)) return [];
        const queue = [start];
        const visited = new Set([start]);
        const result = [];
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        return result
    }
}

const g = new Graph();
for (let i = 1; i <= 10; i++) {
    g.addVertex(i);
}

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("E", "C");
g.addEdge("E", "D");
g.addEdge("D", "F");
g.addEdge("F", "E");
g.addEdge("B", "D");
g.addEdge("D", "E");
console.log(g.bfsIt("A"));
