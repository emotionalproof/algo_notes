// max heap means parents are always larger than children
// each

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    getParent = (index) => Math.floor((index - 1) / 2);
    getLeft = (index) => index * 2 + 1;
    getRight = (index) => index * 2 + 2;
    swap = (node1, node2) => {
        [this.values[node1], this.values[node2]] = [
            this.values[node2],
            this.values[node1],
        ];
    };

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        let parent = this.getParent(index);
        while (this.values[index] > this.values[parent] && index > 0) {
            this.swap(index, parent);
            index = parent;
            parent = this.getParent(index);
        }
    }

    heapifyDown() {
        let index = 0;
        let left = this.getLeft(index);
        let right = this.getRight(index);
        while (left < this.values.length) {
            let largest =
                right < this.values.length &&
                this.values[right] > this.values[left]
                    ? right
                    : left;
            if (this.values[index] >= this.values[largest]) break;
            this.swap(index, largest);
            index = largest;
            left = this.getLeft(index);
            right = this.getRight(index);
        }
    }

    extractMax() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();
        let max = this.values[0];
        this.values[0] = this.values.pop();
        this.heapifyDown();
        return max;
    }

    sorted() {
        let sorted = [];
        let originalHeap = [...this.values];
        while (this.values.length > 0) {
            sorted.push(this.extractMax());
        }
        this.values = originalHeap;
        return sorted;
    }
}

let h = new MaxBinaryHeap();
h.insert(41);
h.insert(39);
h.insert(33);
h.insert(18);
h.insert(27);
h.insert(12);
h.insert(55);
h.insert(7);
h.insert(25);
h.insert(1);
console.log(h);
