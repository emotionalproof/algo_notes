class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let current = this.tail
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        } else {
            this.tail = current.prev
            this.tail.next = null 
            current.prev = null
        }
        return current
    }

    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null 
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.tail = newNode
            this.head = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        console.log("get", index)
        if (index < 0 || index >= this.length) return null 

        if (index <= this.length / 2){
            let count = 0
            let current = this.head
            while (count < index) {
                current = current.next
                count++
            }
            return current
        } else {
            let count = this.length - 1
            let current = this.tail
            while (count > index) {
                current = current.prev
                count--
            }
            return current
        }
    }

    set(index, value) {
        // let node = this.get(index)
        // if (!node){
        //     return false
        // } else {
        //     node.val = value
        //     return true
        // }
        let node = this.get(index)
        if (!!node){
            node.val = value
            return true
        } 
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value)

        let beforeNode = this.get(index - 1)
        let newNode = new Node(value)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        // newNode.next = prevNode.next
        // prevNode.next = newNode
        // newNode.prev = prevNode
        // newNode.next.prev = newNode
        this.length++
        return true 
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev 
        removedNode.next = null 
        removedNode.prev = null
        this.length--
        return true
    }


    print() {
        let arr = []
        let current = this.head
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log('print',arr)
    }


    reverse() {
        let node = this.head
        this.head = this.tail
        this.head.prev = null 
        this.tail = node
        let prev = null
        let next

        for (let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            node.prev = next
            prev = node
            node = next
        }
        return this
    }

}


let list = new DoublyLinkedList()

// list.push("ready")
list.push("set")
// list.push("go")
console.log(list)
list.print()
console.log(list.set(10, "test"))
list.print()

//Big O of Singly Linked Lists
//Insertion O(1) it takes the same amount of time regardless of length
//Removal - it depends ... O(1) or O(n)
//Searching - O(n)
//Access - O(n)


// Big O of Doubly Linked List 
// insertion - O(1)\
// Removal - O(1)
// Searching - O(n)
// Access = O(n)
// technically seraching is O(n/2) but that's still O(n)

//DLL can be used to represent browser history. 

//DLL are almost identical to SLL except there is an additional pointer to prev nodes
//Better than SLL for finding nodes and can be done in half the time
//However, they do take up more memory consider the extra pointer 



