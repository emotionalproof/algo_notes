// function selectionSort(arr) {
//     // let sorted = false
//     let j = 0
//     while (j < arr.length) {
//         let min = j
//         for (let i = j + 1; i < arr.length; i++) {
//             min = arr[min] < arr[i] ? min : i
//         }
//         [arr[j], arr[min]] = [arr[min], arr[j]]
//         j++
//     }
//     return arr
// }





function selectionSort(arr) { 
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            min = arr[min] < arr[j] ? min : j
        }
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}



// function selectionSort(arr) {
//     for (let i = 0; i < arr.length/2; i++) {
//         let end = arr.length - 1 - i
//         let min = i
//         let max = arr.length - 1 - i
//         for (let j = i; j < arr.length; j++) {
//             min = arr[min] < arr[j] ? min : j
//             max = arr[max] > arr[j] ? max : j
//         }
//         if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
//         if (max !== end) [arr[max], arr[end]] = [arr[end], arr[max]]
//     }
//     return arr
// }



console.log(selectionSort([5,4,3,2,1]))


// console.log(selectionSort([1, 2, 3, 4]))