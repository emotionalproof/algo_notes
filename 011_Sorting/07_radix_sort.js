//comparison sorts
// all the sorts sor far are comparisons 
//at base level we are comparing one item with another
//we are just deciding which comes first and which comes second
//O(n^2)
    // Insertion, Bubble, Selection
//O(n log n)
    //Quick, Merge

//Can we do better

//Integer Sorting 
//Radix
    // not doing comparisons 
    //special sorting
    //works on lists of numbers
    //works on binary
    //never makes comparisons between two elements
    //exploits the fact that information about the size of a number is encoded in the number of digits
    //if a number has more digits, it means it is a bigger number

//take a list of numbers
//create ten different buckets
//one for each of the ten numbers in base10
// start by looking at first digit in each number
//group them into buckets based off that number
//then take the numbers in the order they are in the buckets
// repeat process by second digit. 
//if the number doesn't have a second digit, they stay in the zero bucket
//number of times to loop is based on number of digits of the largest number   


// function digits(num) {
//     let digits = []
//     while (num > 0) {
//         let digit = Math.floor(num % 10)
//         digit /= 10
//     }
// }

// const radixSort(arr) {
//     let i = 0
    
// }


// const getDigit = (num, place) => {
//     let numStr = num.toString()
//     let digitStr
//     if (place <= numStr.length){
//         let digit = numStr.length - 1 - place
//         digitStr = numStr[digit]
//     }

//     return digitStr 
// }

//works but calls first digit 1 and not 0
// const getDigit = (num, place) => {
//     let digitPlace = 10**place
//     let digit = Math.floor((num % digitPlace)/10**(place - 1))
//     return digit
// }

// //digits start at 0
// const getDigit = (num, i) => {
//     return Math.floor((Math.abs(num) % Math.pow(10, i + 1)))
// }



//from Colt
// const getDigit = (num, i) => {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }

// console.log(getDigit(-12345, 2))


// const digitCount = num => {
//     return num.toString().length
// }

// const digitCount = num => {
//     let digits = 0
//     while (num >= 1) {
//         num /= 10
//         digits++
//     }
//     return digits
// }


const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = num => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = arr => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]))
    }
    return max
}

const radixSort = arr => {
    let loops = mostDigits(arr)
    for (let i = 0; i < loops; i++) {
        // let buckets = [[],[],[],[],[],[],[],[],[],[]]
        let buckets = Array.from({length: 10}, () => [])
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i)
            buckets[digit].push(arr[j])
        }
        // let newArr = buckets[0].concat(buckets[1]).concat(buckets[2]).concat(buckets[3]).concat(buckets[4]).concat(buckets[5]).concat(buckets[6]).concat(buckets[7]).concat(buckets[8]).concat(buckets[9])
        arr = [].concat(...buckets)
    }
    return arr
}


let arr = [ 9, 8, 7, 6, 5, 4,3, 2, 1,10]


console.log(radixSort(arr))


// big O
// Time
//n = length of array; k = number of digits 
// best: O(nk), Ave: O(nk), Worst O(nk)
//if all numbers are unique, than k has to be at least log n

//Space
//O(n + k)