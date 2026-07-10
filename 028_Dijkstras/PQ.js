class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeft(index) {
        return index * 2 + 1;
    }

    getRight(index) {
        return index * 2 + 2;
    }

    swap(idx1, idx2) {
        return ([this.queue[idx1], this.queue[idx2]] = [
            this.queue[idx2],
            this.queue[idx1],
        ]);
    }

    bubbleUp() {
        let index = this.queue.length - 1;
        let parent = this.getParent(index);
        while (
            index > 0 &&
            this.queue[index].priority < this.queue[parent].priority
        ) {
            this.swap(index, parent);
            index = parent;
        }
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.queue.push(newNode);
        this.bubbleUp();
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        if (this.queue.length === 1) return this.queue.pop();
        let min = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;
        let n = this.queue.length;
        while (true) {
            let smallest = index;
            const left = this.getLeft(index);
            const right = this.getRight(index);
            if (
                left < n &&
                this.queue[left].priority < this.queue[smallest].priority
            ) {
                smallest = left;
            }
            if (
                right < n &&
                this.queue[right].priority < this.queue[smallest].priority
            ) {
                smallest = right;
            }
            if (smallest === index) break;
            this.swap(smallest, index);
            index = smallest;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    checkVertex(vertex) {
        return this.adjacencyList.hasOwnProperty(vertex);
    }

    checkEdge(v1, v2) {
        if (!this.checkVertex(v1) || !this.checkVertex(v2)) return false;
        for (const vertex of this.adjacencyList[v1]) {
            if (vertex.node === v2) return true;
        }
        for (const vertex of this.adjacencyList[v2]) {
            if (vertex.node === v1) return true;
        }
        return false;
    }

    addVertex(key) {
        if (!this.checkVertex(key)) {
            this.adjacencyList[key] = [];
        }
    }

    addEdge(v1, v2, weight) {
        if (this.checkEdge(v1, v2)) return false;
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    dfsIt(start) {
        let stack = [start];
        let result = [];
        let visited = new Set();
        while (stack.length > 0) {
            let current = stack.pop();
            if (!visited.has(current)) {
                result.push(current);
                visited.add(current);
                for (const vertex of this.adjacencyList[current]) {
                    if (!visited.has(vertex.node)) {
                        stack.push(vertex.node);
                    }
                }
            }
        }
        return result;
    }

    dfsRec(start) {
        if (!this.checkVertex(start)) return [];
        const visited = new Set();
        const result = [];
        const traverse = (start) => {
            if (!visited.has(start)) {
                visited.add(start);
                result.push(start);
                for (const neighbor of this.adjacencyList[start])
                    if (!visited.has(neighbor.node)) {
                        traverse(neighbor.node);
                    }
            }
        };
        traverse(start);
        return result;
    }

    bfsIt(start) {
        if (!this.checkVertex(start)) return [];
        const queue = [start];
        const visited = new Set();
        const result = [];
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor.node)) {
                    visited.add(neighbor.node);
                    queue.push(neighbor.node);
                }
            }
        }
        return result;
    }

    dijkstra(start, end) {
        if (!this.checkVertex(start) || !this.checkVertex(end)) return;
        const pq = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        const visited = new Set();
        const vertices = Object.keys(this.adjacencyList);
        for (const vertex of vertices) {
            distances[vertex] = vertex === start ? 0 : Infinity;
            previous[vertex] = null;
            pq.enqueue(vertex, distances[vertex]);
        }

        while (pq.queue.length > 0) {
            const currentNode = pq.dequeue();
            if (!currentNode) break;
            const current = currentNode.val;
            if (visited.has(current)) continue;
            visited.add(current);

            if (current === end) {
                let temp = end;
                while (temp) {
                    path.push(temp);
                    temp = previous[temp];
                }
                path.reverse();
                return { distance: distances[end], path };
            }

            if (distances[current] === Infinity) break;

            for (const neighbor of this.adjacencyList[current]) {
                const candidate = distances[current] + neighbor.weight;
                if (candidate < distances[neighbor.node]) {
                    distances[neighbor.node] = candidate;
                    previous[neighbor.node] = current;
                    pq.enqueue(neighbor.node, candidate);
                }
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

console.log(g.dijkstra("A", "E"));
