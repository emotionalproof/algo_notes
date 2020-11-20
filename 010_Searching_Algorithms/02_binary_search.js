//Binary search

//only works on sorted arrays

//divide and conquer
//pick a pivot point 

//binary search in pseudocode
//function accepts a sorted array and a value
//create a left pointer at the start of the array
// and a right pointer at the end of the array
//while the left pointer comes before the right pointer
//

const binarySearch = (array, target) => {
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end)/ 2)
    while (start < end) {
        if (array[middle] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end)/ 2)
    }
    return array[middle] === target ? middle : -1 
}


let arr = [1,2,3,3,4,5,6,7]
let target = 4

console.log(binarySearch(arr,target))

//big o
//worst and average case
//O(log n)

//best case 
//O(1)