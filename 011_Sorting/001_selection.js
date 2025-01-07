// const selSort = arr => {
//   if (arr <= 1) return arr; 
//   let minIdx = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     minIdx = i;
//     let j = i + 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIdx] > arr[j]) minIdx = j
//     }
//     if (minIdx !== i) {
//       [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
//     }
//   }

//   return arr
// }


const selSort = arr => {
  if (arr <= 1) return arr; 
  let minIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }
  }

  return arr
}


// let arr = [0,0,0,0,0,0,0,5,5,5,1, -1,-100, 100,0 ,0, 1,-1, 2]
let arr = [5,4,3,2,1]
console.log(selSort(arr))