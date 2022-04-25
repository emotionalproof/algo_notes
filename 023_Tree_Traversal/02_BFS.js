//BFS

// Two ways to traverse a tree 
  //Bredth first search
    // checking nodes on same levels
    //check every sibling before we look at a child
    //horizontal
  //Depth First search 
    //vertical


//BFS 
  // steps - iteratively
    //create a queue 
      // this can be an array 
      // and a variable to store the value of the nodes visited
    //place the root node in the queue
    //loop as long as there is anything in the queue
      //dequeue a node from the queue and push the value of the node into the variable that stores the nodes
      //if there is a left property on the node dequeued - add it to the queue 
      //if there is a right property on the node dequeued - add it to the queue 
    //return the variable that stores our values 

//         10
//      6     15
//    3  8      20
//
//queue: []
//visited: []    
// --------   
//take root and add to queue  
//         10
//      6     15
//    3  8      20
//
//queue: [10]
//visited: []    
// --------   
// dequeue root and add to the visited 
//         10
//      6     15
//    3  8      20
//
//queue: []
//visited: [10]    
// --------   
// check if root has left node and if so, add to queue
//then check if there is a right, if so, add to queue
//         10
//      6     15
//    3  8      20
//
//queue: [6, 15]
//visited: [10]    
// --------   
// queue FIFO 
//new loop, dequeue first element and add to visited
//         10
//      6     15
//    3  8      20
//
//queue: [15]
//visited: [10, 6]    
// --------   
// check if there is left, if so add to queue
//check if there is right
//         10
//      6     15
//    3  8      20
//
//queue: [15, 3, 8]
//visited: [10, 6]    
// -------- 
// queue FIFO 
//new loop, dequeue first element
//         10
//      6     15
//    3  8      20
//
//queue: [3, 8, 20]
//visited: [10, 6, 15]   
// -------- 
// queue FIFO 
//new loop, dequeue first element
//check left/right of dequeued element
//         10
//      6     15
//    3  8      20
//
//queue: [8, 20]
//visited: [10, 6, 15, 3]   
// -------- 
// queue FIFO 
//new loop, dequeue first element
//check left/right of dequeued element
//         10
//      6     15
//    3  8      20
//
//queue: [20]
//visited: [10, 6, 15, 3, 8]   
// -------- 
// queue FIFO 
//new loop, dequeue first element
//check left/right of dequeued element
//         10
//      6     15
//    3  8      20
//
//queue: []
//visited: [10, 6, 15, 3, 8, 20]   
// -------- 
    

class Node {
  constructor(value) {
      this.value = value
      this.left = null
      this.right = null
  }
}

class Queue {
  constructor() {
      this.first = null
      this.last = null
      this.size = 0
  }

  enqueue(val) {
      let newNode = new Node(val)
      if (!this.last) {
          this.first = newNode
          this.last = newNode
      } else {
          this.last.next = newNode
          this.last = newNode
      }
      // this.size++
      return ++this.size
  }

  dequeue() {
      if (!this.first) return null
      let current = this.first
      this.size--

      if(this.size === 0) {
          this.first = null
          this.last = null
      } else {
          let newFirst = this.first.next
          current.next = null
          this.first = newFirst
      }
      return current.value
  }

  print() {
      let arr = []
      let current = this.first
      while(current) {
          arr.push(current.value)
          current = current.next
      }
      console.log('print',arr)
  }

}


function bfs(root) {
  let queue = [root];
  let visited = []
  // let cur = root.left;

  // queue.push(root)

  while (queue.length > 0) {
    let cur = queue[0]
    if (cur.left) queue.push(cur.left)
    if(cur.right) queue.push(cur.right)
    visited.push(cur.value)
    queue.shift()
  }
  
}

