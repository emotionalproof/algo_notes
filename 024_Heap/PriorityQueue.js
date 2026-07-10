class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeft(index) {
        return index * 2 + 1;
    }
    getRight(index) {
        return index * 2 + 2;
    }
    swap(idx1, idx2) {
        [this.queue[idx1], this.queue[idx2]] = [
            this.queue[idx2],
            this.queue[idx1],
        ];
    }

    bubbleUp() {
        let index = this.queue.length - 1;
        let parent = this.getParent(index);
        while (
            index > 0 &&
            this.queue[index].priority < this.queue[parent].priority
        ) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.queue.push(node);
        this.bubbleUp();
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        if (this.queue.length === 1) return this.queue.pop();
        let top = this.queue[0];
        this.queue[0] = this.queue.pop();
        this.heapifyDown();
        return top;
    }

    // heapifyDown() {
    //     let index = 0;
    //     let left = this.getLeft(index);
    //     let right = this.getRight(index);
    //     while (left < this.queue.length) {
    //         let topPriority =
    //             right < this.queue.length &&
    //             this.queue[right].priority < this.queue[left].priority
    //                 ? right
    //                 : left;
    //         if (this.queue[index].priority <= this.queue[topPriority].priority)
    //             break;
    //         this.swap(index, topPriority);
    //         index = topPriority;
    //         left = this.getLeft(index);
    //         right = this.getRight(index);
    //     }
    // }

    heapifyDown() {
        let index = 0;
        let n = this.queue.length;
        while (true) {
            let left = this.getLeft(index);
            let right = this.getRight(index);
            let smallest = index;

            if (
                left < n &&
                this.queue[left].priority < this.queue[smallest].priority
            ) {
                smallest = left;
            }
            if (
                right < n &&
                this.queue[right].priority < this.queue[smallest].priority
            ) {
                smallest = right;
            }
            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

const pq = new PriorityQueue();
pq.enqueue("Broken Arm", 4);
pq.enqueue("Chest Pain", 1);
pq.enqueue("Fever", 10);
pq.enqueue("Head Injury", 2);
pq.enqueue("Allergic Reaction", 3);
pq.enqueue("Sprained Ankle", 15);
pq.enqueue("Shortness of Breath", 5);
pq.enqueue("Severe Bleeding", 1);
pq.enqueue("Migraine", 12);
pq.enqueue("Abdominal Pain", 7);
pq.enqueue("High Blood Pressure", 8);
pq.enqueue("Burn", 6);

console.log(pq.dequeue());
