class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) { 
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let middle = this.length / 2;
    let count;
    let current;
    if (index < middle) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let targetNode = this.get(index);
    if (!targetNode) return false;
    targetNode.val = val;
    return true
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let nextNode = this.get(index);
    let prevNode = nextNode.prev;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    let targetNode = this.get(index);
    if (!targetNode) return undefined;
    if (index === 0) return this.shift();
    if ((index === this.length - 1)) return this.pop();

    let prevNode = targetNode.prev;
    let nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    targetNode.prev = null;
    targetNode.next = null;

    this.length--;
    return targetNode;
  }

  reverse() {
    if (this.length <= 1) return this;
    let current = this.head;
    let count = 0;
    while (count < this.length) {
      let newPrev = current.next;

      current.next = current.prev;
      current.prev = newPrev;
      current = newPrev
      count++;
    }
    let newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (!!current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let dll = new DoublyLinkedList();

dll.push(5).push(10).push(15).push(20);
dll.reverse()
dll.print()
// dll.insert("dog", 0)
// dll.insert("cat", 1)
// dll.insert("muffin", 2)
// console.log(dll.get(1))
// dll.print();
// dll.remove(0)
// dll.print();

// dll.remove(0);
// dll.print();
// dll.remove(0);
// dll.print();
// console.log(dll);
