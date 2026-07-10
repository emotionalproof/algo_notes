//non-recursive way 
    //iterative 
//and the recursive way ()

//what is recursion 
    //a process that calls itself
    //a function
//behind the scenes, there is ab built in data structre
    //that manages what happens when functions are invoked
    //the stack 
//the call Stack
    //when operation or function is invoked it is placed on the top of the stack
        //push 
    //when JS sees the return keyword or when the function ends,
    //the compiler will remove from the top
//you think of functions going on an off the calls stack one at a time when they are done
    //in recursive functions, we keep pushing new functions onto the call stack

//base case
    //where recursion stops
//different input aka the recursion call with different input

// function countDown(num) {
//     if (num <= 0) {
//         console.log("All Done!")
//         return
//     }
//     console.log(num)
//     num--
//     countDown(num)
// }

// console.log(countDown(10))

// function sumRange(num) {
//     if (num === 1) return 1
//     return num + sumRange(num - 1)
// }

// sumRange(5)
// (5 + sumRange(4)) //return 5 + sumRange(5 - 1)
// (5 + (4 + sumRange(3))) //return 4 + sumRange(4 - 1)
// (5 + (4 + (3 + sumRange(2)))) //return 3 + sumRange(3 - 1)
// (5 + (4 + (3 + (2 + sumRange(1))))) //return 2 + sumRange(2 - 1)
// (5 + (4 + (3 + (2 + (1))))) //return 1
// (5 + (4 + (3 + (3))))
// (5 + (4 + (6)))
// (5 + (10))
// 15

//factorial
    //4! = 4 * 3 * 2 * 1

// function factorial(num) {
//     console.log(num)
//     if (num === 1) return 1
//     return num * factorial(num - 1)
// }

// let num = 10

// console.log(factorial(num))

// //common recursion pitfalls
//     //missing or incorrect base case
//     //returning the wrong thing or not returning
//     //can cause a stack overflow

// //stack: LIFO
// //Queue: FIFO

// function countDown(num) {
//     if (num <= 0) {
//         console.log("All done!")
//         return
//     }
//     console.log(num)
//     num--
//     countDown(num)
// }


// function collectOddValues(arr) {
//     let result = []

//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return 
//         }

//         if (helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }

//     helper(arr)
//     return result
// }



// x = total per person
// 300 = x * 3/6

class MaxHeap {
  constructor() {
    this.heap = []
  }

  getLeft = (index) => index * 2 + 1;
  getRight = (index) => index * 2 + 2;
  getParent = (index) => Math.floor((index - 1)/2)
  swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }


  insert(value) {
    this.heap.push(value);
    bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parent = this.getParent(index);

    while (index > 0 && this.heap[index] > this.heap[parent]) {
      this.swap(index, parent)
      index = parent;
      parent = this.getParent(index)
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = this.heap[0];
    let left = this.getLeft(index);
    let right = this.getRight(index);

    while (left < this.heap.length) {
      let largest = right < this.heap.length && this.heap[left] < this.heap[right] ?
                    right : left;
      if (this.heap[index] >= this.heap[largest]) break;
      this.swap(index, largest);
      index = largest;
      left = this.getLeft(index)
      right = this.getRight(index)
    }
  }


}