class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    getParent = (index) => (index - 1) / 2;
    getLeft = (index) => index * 2 + 1;
    getRight = (index) => index * 2 + 2;


    enqueue(value, priority) {
        this.queue.push({ value, priority });
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.queue.length - 1;
        let parent = this.getParent(index);
        while (this.queue[index].priority < this.queue[index].priority)
    }
}
