//what a class is
//how js implements the idea of class
//abstraction, encapsulation, polymorphism

//what is a class
//a blueprint for creating objects with pre-defined properties and methods


//what is a prototype
//in js, mechanism by which objects inherit features from one another
//objects can have a prototype object that acts as a template object

//arr.beef = function() {console.log("I love beef")}

class Node {
    constructor(val) {
        this.val = val 
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this 
    }

    shift() {
        return this.remove(0)
    }

    unshift(val) {
        if (this.head === null) {
            this.head = new Node(val)
            this.tail = this.head
        } else {
            let newNode = new Node(val)
            newNode.next = this.head;
            this.head = newNode; 
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }

        cur = this.head;
        let count = 0;
        for (let cur = this.head; cur !== null && count != index; cur = cur.next) {
            count++
        }

        return curr
    }

    insert(index, val) {
        let tmp;
        if (index < 0 || index > this.length) {
            return false
        }

        if (index === this.length) {
            return !!this.push(val);
        }

        if (index === 0) {
            tmp = null;
            if (this.head !== null) {
                tmp = this.head
            }

            this.head = new Node(val);
            this.head.next = tmp;
            this.length++;
            return true;
        }

        var prev = this.get (index - 1);

        if (prev === null) {
            return false
        }

        tmp = prev.next;
        prev.next = new Node(val);
        prev.next.next = tmp;
        this.length++;
        return true;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}