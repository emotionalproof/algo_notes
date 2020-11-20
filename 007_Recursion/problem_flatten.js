//flatten
//accepts an array of arrays and returns a new array
//with all the values flattened

// function flatten(arr) {
//     let flattened = []
//     if (arr.length === 0) return []
//     if (typeof arr[0] === 'number') {
//         flattened.push(arr[0])
//         return flattened.concat(flatten(arr.slice(1)))
//     } else {
//         return flatten(arr[0]).concat(flatten(arr.slice(1)))
//     }
// }

// function flatten(arr) {
//     let flattened = []
//     for (let i = 0; i < arr.length; i++) {
//         console.log({arr, flattened})
//         if (Array.isArray(arr[i])) {
//             console.log("if")
//             flattened = flattened.concat(flatten(arr[i]))
//         } else {
//             console.log("else")
//             flattened.push(arr[i])
//         }
//     }
//     return flattened
// }

const flatten = arr => {
    let flattened = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flatten(arr[i]))
        } else {
            flattened.push(arr[i])
        }
    }
    return flattened
}


console.log(flatten([1, [2, [3, 4], [[5]]]]))// [1, 2, 3, 4, 5]// 
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


// [1, [2, [3, 4], [[5]]]]
