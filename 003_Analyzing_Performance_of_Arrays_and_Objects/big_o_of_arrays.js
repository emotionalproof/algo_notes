//ARRAYS

//ordered lists

let names = ["Michael", "Melissa", "Andrea"]
let values = [true, {}, [], 2, "awesome"]

//when to use?
    //when you need order
    // when you need fast access/insertion and removal (sort of . . .)

//Big O of Arrays
// insertion - it depends . . . 
    //depends on where we are inserting
    //array.push is O(1), just adding to end of the array and creating new index
    //if at the beginning O(n)
// removal - it depends . . . 
    //same as inserting
// searching - O(n)
    //iterate through and check until find target element
// access - O(1)
    //array[1]


//Built in array methods
//push O(1)
//pop 0(1)
//shift/unshift O(n)
//concat O(n)
    //array1.concat(array2)
    // technically O(m + n)
//slice O(n)
    //returns a shallow copy of a portion of an array into a new array object
        // selected from begin to end (end not included)
        //original array will not be modified
        //let animals = [0, 1, 2, 3, 4]
        // animals.slice(2) //=> [2, 3, 4]
        // animals.slice(2, 4) //=> [2, 3]
        // animals.slice(1, 5) //=> [1, 2, 3, 4]
//splice O(n)
    //changes the contents of an array by removing existing elements and/or adding new elements
    //let months = ['Jan', 'March', 'April', 'June']
    //
//sort O(n log n)
//forEach/map/filter/reduce/etc - O(n)



//two mechinisms for storing data on computer
//RAM(memory)
//Storage

//data on storage is permanent
//RAM(memory) is temporary

//reading and writing data from storage is slow
//memory is quicker

//applications are stored in storage
    //but loads into memory

let hash = {
    4:1,
    1:5
    }

const findKeyMaxValue = obj => {
    let maxKey = 0
    let maxValue = 0
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] > maxValue) {
            maxKey = keys[i]
            maxValue = obj[keys[i]]
        }
    }
    return maxKey
}

findKeyMaxValue(hash)

// function areThereDuplicates(arr) {
//     let frequencyCounter = {}
//     for (let i=0; i < arr.length; i++) {
//       let value = arr[i]
//       frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
//     }
//     console.log(frequencyCounter)
//     for (let key in frequencyCounter) {
//         if (frequencyCounter[key] > 1) {
//             return true;
//         }
//     }
//     return false;
//   }
  

// let array = [1, 1, 2, 3, 4, 4]

// console.log(areThereDuplicates(array))

//shift and unshift, linear time
//Slice returns copy of part of an array or entire thing
    //depends on how many elements we want to copy
    //linear
//Splice
    //versitile
    //generally O(n)
    //may be slightly less but asymp O(n)

//sort O(n log n)
    //slightly more than linear

//push/pop constant time
//better to add and remove from the end
//add/remove from beginning or middle will cause a change of index to each subsequent index
