//Divide and Conquer
//this pattern involves dividing a data set into smaller chunks
//and then repeating a process with a subset of data
//this pattern can tremendously decrease time complexity


// const binarySearch = (array, target) => {
//     let startIndex = 0;
//     let endIndex = array.length - 1;
//     while(startIndex <= endIndex) {
//         let middleIndex = Math.floor((startIndex + endIndex) / 2);

//         if(target === array[middleIndex]) {
//             return console.log("Target was found at index " + middleIndex);
//         }

//         if(target > array[middleIndex]) {
//         console.log("Searching the right side of Array")
//         startIndex = middleIndex + 1;
//         }
//         if(target < array[middleIndex]) {
//         console.log("Searching the left side of array")
//         endIndex = middleIndex - 1;
//         }
//         else {
//         console.log("Not Found this loop iteration. Looping another iteration.")
//         }
//     }

//     console.log("Target value not found in array");
// }


// console.log(binarySearch([1,2,3,4,5,6,7], 5))