//Stack for LIFO
//Stack is a concept. a set of rules
//last thing added in is first removed
//many ways to implement it
//many languages come with a stack data type but JS does not
//easy to use array 
    //by only using push and pop
        //adding/removing items from end of array
    //or by only using shift/unshift
        //adding/removing items from the beginning of array

// let stack = []

// stack.push('google')
// stack.push('instagram')
// stack.push('youtube')
// stack.pop()


// stack.shift()
// stack.unshift("twitter")

//this works but we don't need indices or other array built-ins

//need to build a ds more like a singly linked list
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.last) {
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first 
            this.first = newNode
        }
        // this.size++
        return ++this.size
    }

    pop() {
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


let test = new Stack()
test.print()
test.push("hi")
test.print()
test.push("how")
test.print()
test.push("are")
test.print()
test.push("you")
test.print()
console.log(test)
test.print()
test.pop()
test.print()
test.pop()
test.print()
test.pop()
test.print()
test.pop()
test.print()
test.pop()
test.print()
test.push("hi")
test.print()
console.log(test)


//Big O of Stacks 
//Insertion O(1)
//Removal O(1)
//Searching O(N)
//Access O(N)