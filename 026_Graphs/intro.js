// What are graphs
// a graph data structure consists of a finite and possibly mutable set of vertices or nodes or points,
// together with a set of unordered pairs of these vertices for an undirected graph
// or a set of ordered pairs for a directed graph

// a set of nodes
// a set of pairs through vertices

// nodes + connections
// tree is a type of graph
// trees have parents and children

// Uses
    // social networks
    // location/mapping
    // routing algorithms 
    // visual hierarchy
    // file system optimizations

// a bunch of nodes with connections between them
// no pattern
// free from


// Graph Terms
// Vertex is a node
// Edge is a connections between two nodes
// Weighted/Unweighted - values assigned to distances between vertices
// Directed/Undirected - directions assigned to distances between vertices


// undirected
// each edge is two way
// like friends on facebook 
// not a one way relationship 
// usually shown with a line between vertices 

// directed graphs
// have lines in between vertices indicating the direction/polarity of the edge
// show followers 

// unweighted
// each edge has not value associated with it

// weighted
// there is a value associated with an edge
// like a map 

// a map would be directed and weighted
// facebook friends would be undirected and unweighted
// instagram connection is directed and unweighted

// Representing a graph
// need to record the nodes and the connections


// Adjacency Matrix
// boolean matrix, can mark connections with binary or true/false
// Example adjacency matrix for 6 vertices: A, B, C, D, E, F
// We'll use a 2D array where matrix[i][j] === 1 means there is an edge from vertex i to vertex j

const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// Example: edges between A-B, A-C, B-D, C-E, D-E, E-F
const adjacencyMatrix = [
    //A B C D E F
    [0,1,1,0,0,0], // A
    [1,0,0,1,0,0], // B
    [1,0,0,0,1,0], // C
    [0,1,0,0,1,0], // D
    [0,0,1,1,0,1], // E
    [0,0,0,0,1,0]  // F
];

console.log(adjacencyMatrix);


// Adjacency List
// store the edges
const adjacencyList = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'E'],
    E: ['C', 'D', 'F'],
    F: ['E']
};


console.log(adjacencyList);


// Graph Traversal Uses
// Peer to Peer networking
// Web Crawlers
// Finding Closest matches/recommendations
// Shortest path problems
    // GPS Navigation
    // Solving Mazes
    // AI (shortest path to win game)