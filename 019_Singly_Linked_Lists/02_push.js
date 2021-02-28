//node
//stores a piece of data - val
//ref to the next node - next

// all we need for a node 
// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// this is bad 
// need a push method 
//need a linked list class to manage the nodes

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

//takes no arguments


// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class SinglyLinkedList{
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }

//     push(val) {
//         let newNode = new Node(val)
//         if (this.head === null) {
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//     }

//     print() {
//         let count = 0
//         let current = this.head

//         while (count < this.length) {
//             console.log(current.val, "=>")
//             count++
//             if (current.next) {
//                 current = current.next
//             }
//         }
//     }

//     pop() {
//         let current = this.head
//         let node = 1
//         while (node < this.length - 1) {
//             if (node === this.length - 1) {
//                 this.tail = current
//                 current.next = null
//             } else {
//                 current = current.next
//             }
//             node++
//         }
//     }
// }


// let list = new SinglyLinkedList()
// list.push("hello")
// list.push("goodbye")
// list.push  

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        if (this.length === 0) return undefined

        let current = this.head
        let previous = null

        while (current.next) {
            previous = current
            current = current.next
        }
        if (this.head === this.tail){
            this.head = null
            this.tail = null
        } else {
            this.tail = previous
            this.tail.next = null
        }
        this.length--
        return current.val
    }
}