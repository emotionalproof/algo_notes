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
        return this
    }

    pop() {
        if (this.length === 0) return undefined

        let current = this.head
        let previous = null

        while (current.next) {
            previous = current
            current = current.next
        }
        this.tail = previous
        if (!this.tail){
            this.head = null
        } else {
            this.tail.next = null
        }
        this.length--
        return current.val

        // if (!this.head) return undefined

        // let current = this.head
        // let newTail = current

        // while (current.next) {
        //     newTail = current
        //     current = current.next
        // }
        // this.tail = newTail
        // this.tail.next = null
        // this.length--
        // return current 

    }

    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if (this.length === 0) this.tail = null
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        return this.
    }
}


let list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")  
console.log(list)
list.push('donkey')
console.log(list)
list.push('snake')
console.log(list)
console.log(list.shift())
console.log(list)

console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)