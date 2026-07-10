class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0
  }

  enqueue(val) {
    let newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() { 
    if (this.size === 0) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first === null;
      this.last === null;
    } else {
      this.first = this.first.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.val;
  }
}


let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue)
queue.dequeue()
console.log(queue)
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);