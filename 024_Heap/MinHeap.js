class MinHeap {
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
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        let parent = this.getParent(index);
        while (index > 0 && this.heap[index] < this.heap[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let left = this.getLeft(index);
        let right = this.getRight(index);
        while (left < this.heap.length) {
            let smallest =
                right < this.heap.length && this.heap[right] < this.heap[left]
                    ? right
                    : left;
            if (this.heap[index] <= this.heap[smallest]) break;
            this.swap(index, smallest);
            index = smallest;
            left = this.getLeft(index);
            right = this.getRight(index);
        }
    }

    buildHeap(arr) {
        let n = arr.length - 1;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    sorted() {
        let sorted = [];
        let originalHeap = [...this.heap];
        while (this.heap.length > 0) {
            sorted.push(this.extractMin());
        }
        this.heap = originalHeap;
        return sorted;
    }
}
