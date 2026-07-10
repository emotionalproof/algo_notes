class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }
    
  push(value) {
      let node = new Node(value);
      if (this.size === 0) {
          this.first = node;
          this.last = node;
      } else {
          node.next = this.first;
          this.first = node
      }
      return ++this.size
  }

  pop() {
    if (this.size === 0) return null;
    let poppedNode = this.top;
    this.top = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.val;
  }
}


let stack = new Stack()
stack.push(10)
console.log(stack);
stack.push(100)
stack.push(1000)
console.log(stack)
