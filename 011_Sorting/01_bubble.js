//what is sorting
//rearranging items in a collection so that the items are in some kind of order


// const bubbleSort = ( arr ) => {
//   let sorted = false;
//   let loop = 0;
//   while (!sorted) {
//     sorted = true;
//     let i = 0;
//     while (i < arr.length - 1 - loop) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//       }
//       i++
//     }
//     loop++
//   }
//   return arr;
// }

const bubble = ( arr ) => {
  //create a variable to track if a full pass has completed without a swap 
  //we will assume the array is unsorted and set it to false by default
  //the goal will be to do one complete pass without any swaps
  let sorted = false
  //create a variable to hold how many passes have been completed
  //this sort bubbles one correct value to the end of the array at the end of each pass
  //for this reason will iterate over a smaller subarray with each pass
  let loop = 0
  
  //this will have a nested loop
  //for the outer loop, we will continue so long as sorted is set to false
  while (!sorted) {
    //we will put the burden of proof on the inner loop and set sorted to true right now
    //if there is a swap, then this will be set back to false
    sorted = true;
    
    // create the index variable for the inner loop and
    let i = 0;
    while (i < arr.length - 1 - loop) {
      //we will compare the current element with the next
      //if the current is larger than the next, than we want to swap 
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        //since we have done a swap we need to assume there is more to sort and set sorted to false
        sorted = false
      }
      i++
    }
    //Prior to closing one pass of the outer loop, we increment the loop variable
    loop++
  }
  return arr
}

// const bubbleSort = ( arr ) => {
//   let sorted = false;
//   let loop = 0;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < arr.length - 1 - loop; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//         sorted = false;
//       }
//     }
//     loop++
//   }
//   return arr;
// }


const bubbleSortOpt = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}


const bubbleSortV1 = (arr) => {
  let sorted = false
  for (let i = arr.length; i > 0; i--){
    sorted = true
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        sorted = false
      }
    }
    if (sorted) break
  }
  return arr 
}

const bubbleSort = ( arr ) => {
  let sorted = false
  for (let i = arr.length; i > 0; i--) {
    sorted = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        sorted = false
      }
    }
    if (sorted) return arr
  }
  return arr
}

// const bubbleSortLastSwapped = (arr) => {
//   let n = arr.length
//   while (n > 0) {
//     let newN = 0
//     for (let i = 1; i < n; i++) {
//       if (arr[i - 1] > arr[i]) {
//         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
//         newN = i
//       }
//     }
//     n = newN
//   }
//   return arr
// }

const bubbleSortLastSwapped = (arr) => {
  let n = arr.length
  while (n > 0) {
    let newN = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]){
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        newN = i
      }
    }
    n = newN
  }
  return arr
}

let arr = [9,8,7,6,5,4,3,2,1]
console.log(bubbleSortLastSwapped(arr))