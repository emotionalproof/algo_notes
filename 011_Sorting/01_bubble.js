//what is sorting
//rearranging items in a collection so that the items are in some kind of order



function bubble(arr) {
    let sorted = false
    let loop = 0
    while(!sorted) {
        sorted = true
        let i = 0
        while (i < arr.length - loop  - 1) {
            count++
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
            i++
        }
        loop++
    }
    return arr
}

// function bubble(arr) {
//     let sorted = false
//     let loop = 0
//     let count = 0
//     while(!sorted) {
//         sorted = true
//         let i = arr.length - 1
//         while (i > -1 + loop) {
//             count++
//             if (arr[i] < arr[i - 1]) {
//                 [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
//                 sorted = false
//             }
//             i--
//         }
//         loop++
//     }
//     console.log(count)
//     return arr
// }

// function bubble(arr) {
//     let sorted = 0
//     let count = 0
//     while(sorted < arr.length) {
//         let i = 0
//         while (i < arr.length - sorted  - 1) {
//             count++
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//             }
//             i++
//         }
//         sorted++
//     }
//     console.log(count)
//     return arr
// }

// function bubble(arr) {
//     let count = 0
//     let i = arr.length - 1
//     while(i > -1) {
//         let j = 0
//         while (j < i) {
//             count++
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//             j++
//         }
//         i--
//     }
//     console.log(count)
//     return arr
// }

// function bubble(arr) {
//     let count = 0
//     let i = arr.length - 1
//     while(i > -1) {
//         let j = 0
//         while (j < i) {
//             count++
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//             j++
//         }
//         i--
//     }
//     console.log(count)
//     return arr
// }

// console.log(bubble([10,9, 8,7, 6,5,4,3,2,1]))
console.log(bubble([11,2,3,4,5,6,7,8,9,10]))

// function arithmeticSeq(arr) {
//     if (arr.length === 0) return 0
//     let count = 0
//     return arr.length + arithmeticSeq(arr.slice(1))
// }

// console.log(arithmeticSeq([5,4,3,2,1]))

// x = 