class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParent = (index) => Math.floor((index - 1) / 2);
    getLeft = (index) => 2 * index + 1;
    getRight = (index) => 2 * index + 2;
    swap = (index1, index2) => {
        [this.heap[index1], this.heap[index2]] = [
            this.heap[index2],
            this.heap[index1],
        ];
    };

    insert(value) {
        this.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        let parent = this.getParent(index);
        while (index > 0 && this.heap[index] > this.heap[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.peek();
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }
}
