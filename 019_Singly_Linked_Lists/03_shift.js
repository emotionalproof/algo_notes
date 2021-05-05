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
        if (!this.head) return undefined
        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current 
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current 

        // if (!this.head) return undefined

        // let current = this.head
        // let previous = null

        // while (current.next) {
        //     previous = current
        //     current = current.next
        // }
        // this.tail = previous
        // if (!this.tail){
        //     this.head = null
        // } else {
        //     this.tail.next = null
        // }
        // this.length--
        // return current

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
        //if(this.length === 0) {
        //     this.head = null
        //     this.tail = null
        // }
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
        if (this.length === 0) this.tail = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count = 0
        let current = this.head
        while (count < index) {
            current = current.next
            count++
        }
        return current
    }

    set(index, value) {
        let node = this.get(index)
        if (!node){
            return false
        } else {
            node.val = value
            return true
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value)

        let prevNode = this.get(index - 1)
        let newNode = new Node(value)
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.length++
        return true 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let prevNode = this.get(index - 1)
        prevNode.next = prevNode.next.next
        this.length--
        return true
    }

// [goodbye,rick,3,snake]
// [      , ,    ,goodbye] index 1, current: rick, prev: goodbye
// [      , ,rick,goodbye] index 2, current: 3, prev: rick
// [      ,3,rick,goodbye] index 3, current: snake, prev: 3
// [ snake,3,rick,goodbye] index 4, current: , prev: snake
// [ , , ,1] index 1
// [ , , ,1] index 1

    print() {
        let arr = []
        let current = this.head
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log('print',arr)
    }

    // reverse() {
    //     // if (this.length === 0) return undefined
    //     // if (this.length === 1) return this.head

    //     let current = this.head.next
    //     let prev = this.head
    //     this.tail = prev
    //     this.tail.next = null 
    //     let next
    //     for (let i = 1; i < this.length; i++){
    //         next = current.next 
    //         current.next = prev
    //         prev = current
    //         current = next
    //     }
    //     this.head = prev
    //     return this
    // }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next

        for (let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

}


//Big O of Singly Linked Lists
//Insertion O(1) it takes the same amount of time regardless of length
//Removal - it depends ... O(1) or O(N)


let list = new SinglyLinkedList()
list.push("hello")
list.push("goodbye")  
list.push('donkey')
list.push('snake')
// list.shift()

// list.insert(0,3)

list.print()
list.reverse()
list.print()

list.set(1, 'test')
list.print()
// console.log(list)
// console.log('head', list.head, 'head.next', list.head.next, 'tail', list.tail)





