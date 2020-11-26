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
// function mergeArrays(arr1, arr2) {
//     let merged = []
//     let i = 0
//     let j = 0
//     while (i < arr1.length || j < arr2.length) {
//         if (arr1[i] > arr2[j] ) {
//             merged.push(arr2[j])
//             j++
//         } else if (arr1[i] <= arr2[j] ) {
//             merged.push(arr1[i])
//             i++
//         } else if (i >= arr1.length) {
//             merged.push(arr2[j])
//             j++
//         } else if (j >= arr2.length) {
//             merged.push(arr2[i])
//             i++
//         }
//     }
//     return merged
// }
// console.log(mergeArrays([4], [3]))


function mergeSort(array) {
    if (array.length <= 1) return array
    let middle = Math.floor(array.length/2)
    let array1 = mergeSort(array.slice(0, middle))
    let array2 = mergeSort(array.slice(middle))
    return mergeArrays(array1, array2)
}

//merging arrays
function mergeArrays(arr1, arr2) {
    let merged = []
    let i = 0
    let j = 0
    while (i < arr1.length || j < arr2.length) {
        if (i >= arr1.length) {
            merged.push(arr2[j])
            j++
        } else if (j >= arr2.length) {
            merged.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j] ) {
            merged.push(arr2[j])
            j++
        } else if (arr1[i] <= arr2[j] ) {
            merged.push(arr1[i])
            i++
        } 
    }
    return merged
}


// function mergeSort(arr) {
// 	if (arr.length <= 1) return arr
	
// 	let middle = Math.floor(arr.length/2)
// 	let arrLeft = mergeSort(arr.slice(0, middle))
// 	let arrRight = mergeSort(arr.slice(middle))
	
// 	return mergeArrays(arrLeft, arrRight)	
// }

// function mergeArrays(arr1, arr2) {
// 	let result = []
	
// 	let arr1Index = 0
// 	let arr2Index = 0
	
// 	while (arr1Index < arr1.length || arr2Index < arr2.length) {
// 		if (arr1Index >= arr1.length) {
// 			result.push(arr2[arr2Index])
// 			arr2Index++
// 		} else if (arr2Index >= arr2.length) {
// 			result.push(arr1[arr1Index])
// 			arr1Index++
// 		} else if (arr1[arr1Index] < arr2[arr2Index]) {
// 			result.push(arr1[arr1Index])
// 			arr1Index++
// 		} else if (arr1[arr1Index] >= arr2[arr2Index]) {
// 			result.push(arr2[arr2Index])
//             arr2Index++
//         }
//     }
	
// 	return result   
// }



console.log(mergeSort([8,7,6,5,4,3,2,1]))