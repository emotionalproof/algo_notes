//what is a queue
// add data in and remove data out
//FIFO
//think of a line, a queue
//first in first out
//line at amusement park
//background tasks, uploading resources 
//print queue

//enqueue 
//dequeue 
// if we built with an array we would either use push with shift OR unshift with pop
// but this will involve re-indexing every item in the array

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue{
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


let test = new Queue()
test.enqueue("hi")
console.log(test)
test.print()
test.dequeue()
console.log(test)
test.print()
test.dequeue()
console.log(test)
test.print()
test.enqueue("hi")
console.log(test)
test.print()
test.enqueue("how")
console.log(test)
test.print()
test.enqueue("are")
console.log(test)
test.print()
test.enqueue("you")
console.log(test)
test.print()
test.dequeue()
console.log(test)
test.print()


//Big O of Queues
//Insertion/Removal O(1)
//searching/access O(N)

// if you need to search/access, consider using an array