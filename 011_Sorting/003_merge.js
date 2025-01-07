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


const mergeSort = (arr) => {
  // console.log({arr})
  if (arr.length <= 1) return arr;
  let half = arr.length/2
  let arr1 = mergeSort(arr.slice(0, half))
  let arr2 = mergeSort(arr.slice(half));
  // console.log({arr1, arr2})
  return mergeArrays(arr1, arr2)
}


const mergeArrays = (arr1, arr2) => {
  console.log({arr1, arr2})
  if (arr1.length === 0) {
    return arr2
  } else if (arr2.length === 0) {
    return arr1
  }

  if (arr1[0] < arr2[0]) {
    return [].concat(arr1[0]).concat(mergeArrays(arr1.slice(1), arr2))
  } else {
    return [].concat(arr2[0]).concat(mergeArrays(arr2.slice(1), arr1))
  }

}

// let arr = [1000000000, 9, 9 , 9 , 9 , 9, 1, 1, 1, 1, 1, -10, 99999999]
// console.log(mergeSort(arr))



// const countDown = num => {
//   if (num === 0) return
//   console.log(num)
//   return (countDown(num - 1))
// }

// console.log(countDown(5))

const arrayMerge = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;
  while (arr1.length > i || arr2.length > j) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j])
      j++
    } else if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    }
  }

  return merged 
}

let arr1 = [1,3,5,7]
let arr2 = [2,4,6,8]

console.log(mergeArrays(arr1, arr2))