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

// }


const getDigit = (num, place) => {

}