//recursiveRange
//accepts a number and adds up all the numbers
//from 0 to the number

const recursiveRange = num => {
    if (num === 1) return 1
    return num + recursiveRange(num - 1)
}


const num = 10
console.log(recursiveRange(num))



//sum = 1/2(number of terms) * (firstTerm + lastTerm)