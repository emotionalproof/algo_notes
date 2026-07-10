//1948
//jonathan van neuman 
//combo of splitting, sorting, merging 
//based on fact that arrays of 0 or 1 elements are already sorted
//[] is already sorted; [9] is already sorted 


//have a merge function
//takes two sorted arrays
//break up the array into halves until you have arrays that are empty 
//call merge sort again, until arrays are empty or have one element
//once you have 


// const mergeSort = (arr) => {
//   // console.log({arr})
//   if (arr.length <= 1) return arr;
//   let half = arr.length/2
//   let arr1 = mergeSort(arr.slice(0, half))
//   let arr2 = mergeSort(arr.slice(half));
//   // console.log({arr1, arr2})
//   return mergeArrays(arr1, arr2)
// }


// const mergeArrays = (arr1, arr2) => {
//   console.log({arr1, arr2})
//   if (arr1.length === 0) {
//     return arr2
//   } else if (arr2.length === 0) {
//     return arr1
//   }

//   if (arr1[0] < arr2[0]) {
//     return [].concat(arr1[0]).concat(mergeArrays(arr1.slice(1), arr2))
//   } else {
//     return [].concat(arr2[0]).concat(mergeArrays(arr2.slice(1), arr1))
//   }

// }

// // let arr = [1000000000, 9, 9 , 9 , 9 , 9, 1, 1, 1, 1, 1, -10, 99999999]
// // console.log(mergeSort(arr))



// // const countDown = num => {
// //   if (num === 0) return
// //   console.log(num)
// //   return (countDown(num - 1))
// // }

// // console.log(countDown(5))

// const arrayMerge = (arr1, arr2) => {
//   let merged = [];
//   let i = 0;
//   let j = 0;
//   while (arr1.length > i || arr2.length > j) {
//     if (arr1[i] > arr2[j]) {
//       merged.push(arr2[j])
//       j++
//     } else if (arr1[i] < arr2[j]) {
//       merged.push(arr1[i])
//       i++
//     }
//   }

//   return merged 
// }

// let arr1 = [1,3,5,7]
// let arr2 = [2,4,6,8]

// console.log(mergeArrays(arr1, arr2))


// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr

//   let half = Math.floor(arr.length/2)
//   let firstHalf = mergeSort(arr.slice(0, half))
//   let secondHalf = mergeSort(arr.slice(half))
//   return mergeArr(firstHalf, secondHalf)
// }


// let arr = [5, 4, 3, 2, 1, 0, -1]
// console.log(mergeSort(arr))


// const mergeArr = (arr1, arr2) => {
//   let mergedArr = []
//   let arr1Length = arr1.length
//   let arr2Length = arr2.length

//   if (arr1Length === 0) return arr2
//   if (arr2Length === 0) return arr1 

//   let maxLength = Math.max(arr1Length, arr2Length)
//   let i = 0;
//   let j = 0;

//      if (arr1Value <= arr2Value || arr2Value === undefined) {
//        mergedArr.push(arr1Value);
//        i++;
//      } else {
//        mergedArr.push(arr2Value);
//        j++;
//      }
//   while (i < arr1Length || j < arr2Length) {
//     let arr1Value = arr1[i]
//     let arr2Value = arr2[j]
//     if (arr1Value <= arr2Value || arr2Value === undefined) {
//       mergedArr.push(arr1Value)
//       i++
//     } else {
//       mergedArr.push(arr2Value)
//       j++
//     }
//   }
//   return mergedArr
// }


//  const mergeArr = (arr1, arr2) => {
//   let merged = [];
//   let i = 0;
//   let j = 0;
//   while (arr1.length > i || arr2.length > j) {
//     if (arr1[i] === undefined && arr2[j] === undefined) {
//       i++
//       j++
//     }else if (arr1[i] > arr2[j] || arr1[i] === undefined) {
//       merged.push(arr2[j])
//       j++
//     } else {
//       merged.push(arr1[i])
//       i++
//     }
//   }

//   return merged 
// }

function mergeArr(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

let arr1 = [-2,1,3,6]
let arr2 = [1,2,3,4]

// console.log(mergeArr(arr1, arr2))
// const mergeArr = (arr1, arr2) => {
//   if (arr1.length === 0 && arr2.length === 0) return []
//   if (arr1[0] === undefined && arr2[0] === undefined){
//     return [].concat(mergeArr(arr1.slice(1), arr2.slice(1)))
//   }else if (arr1[0] === undefined || arr1[0] > arr2[0]) {
//     return [arr2[0]].concat(mergeArr(arr1, arr2.slice(1)));
//   } else {
//     return [arr1[0]].concat(mergeArr(arr1.slice(1), arr2));
//   }
// };

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let half = Math.floor(arr.length / 2);
  let firstHalf = mergeSort(arr.slice(0, half));
  let secondHalf = mergeSort(arr.slice(half));
  return mergeArr(firstHalf, secondHalf);
};

let arr = [5, 4, 3, undefined, 2, 1, 0, -1];
console.log(mergeSort(arr));
