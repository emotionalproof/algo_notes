//like merge sort
//recursion until 0 or 1 items
//works by selection one element
    // called the pivot
    //and finding the index where the pivot should end up in the sort array


// function quickSort(arr) {
//     if (arr.length <= 1) return arr

//     let pivot = arr[0]
//     let arrLeft = []
//     let arrRight = []
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             arrLeft.push(arr[i])
//         } else {
//             arrRight.push(arr[i])
//         }
//     }
//     // return merge(quickSort(arrLeft), pivot, quickSort(arrRight))
//     return quickSort(arrLeft).concat(pivot).concat(quickSort(arrRight))
// }

// function merge(arr1, pivot, arr2) {
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i])
//     }
//     result.push(pivot)
//     for (let i = 0; i < arr2.length; i++) {
//         result.push(arr2[i])
//     }
//     return result
// }

// let arr = [4,6,8,5,4,2,5,3,2,332423,12123]

// console.log(quickSort(arr))
 
// console.log(merge([1,2,3], 4, [5,6,7]))
// [5,9,2,8,3,7,4,6]

// function quickSort(arr) {
//     if (arr.length <= 1) return arr

//     let pivot = arr[0]
//     let under = 0
//     let over = 0

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] >= pivot) {
//             over++
//         } else {
//             [arr[under + 1], arr[i]] = [arr[i], arr[under + 1]]
//             under++
//         }
//     }
//     [arr[0], arr[under]] = [arr[under], arr[0]]

//     let arrLeft = arr.slice(0, under)
//     let arrRight = arr.slice(under + 1)
//     return quickSort(arrLeft).concat(pivot).concat(quickSort(arrRight))
// }


// function merge(arr1, pivot, arr2) {
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i])
//     }
//     result.push(pivot)
//     for (let i = 0; i < arr2.length; i++) {
//         result.push(arr2[i])
//     }
//     return result
// }




// console.log(quickSort(arr))


// function quickSort(arr) {
//     if (arr.length <= 1) return arr
//     let pivot = pivotArray(arr)
//     let arrLeft = arr.slice(0, pivot)
//     let arrRight = arr.slice(pivot + 1)
//     return merge(quickSort(arrLeft), arr[pivot], quickSort(arrRight))
// }

// function pivotArray(arr) {
//     let pivot = arr[0]
//     let under = 0
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             [arr[under + 1], arr[i]] = [arr[i], arr[under + 1]]
//             under++
//         }
//     }
//     [arr[0], arr[under]] = [arr[under], arr[0]]
//     return under
// }

// function merge(arr1, pivot, arr2) {
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i])
//     }
//     result.push(pivot)
//     for (let i = 0; i < arr2.length; i++) {
//         result.push(arr2[i])
//     }
//     return result
// }

let arr = [4,8,2,1,5,7,6,3]
// 5,2,1,4,3,8,7,6
// 3,2,1, 4, 5,8,7,6


function quickSort(arr, start=0, end=arr.length) {
    if (start < end) {
        let pivot = pivotArray(arr, start, end)
        quickSort(arr, start, pivot)
        quickSort(arr, pivot + 1, end)
    }
    return arr
}

function pivotArray(arr, start, end) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    let middle = Math.floor((start + end)/2)
    let pivot = arr[middle]
    swap(arr, start, middle)
    let pivotIndex = start
    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++
            swap(arr, pivotIndex,i)
        }
    }
    swap(arr, start, pivotIndex)
    return pivotIndex
}



console.log(quickSort(arr))


//big o of QS
//time
//best case
// O(n log n)

//average case
// O(n log n)

//worst case
// O(n²)

//space
// O(log n)