//given two positive integer
//find out if the two numbers have the same frequency of digits
function sameFrequency(num1, num2) {
    let array1 = digitArray(num1)
    let array2 = digitArray(num2)
    if (array1.length !== array2.length) return false

    let objNum1 = numCountHash(array1)
    let objNum2 = numCountHash(array2)
    

    for (let i = 0; i < array1.length; i++) {
        let current = array1[i]
        if (objNum1[current] !== objNum2[current]) {
            return false
        }
    }
    return true
}

function digitArray(num) {
    let array = []
    while (num > 0) {
        let digit = num % 10
        array.push(digit)
        num = Math.floor(num/10)
    }
    return array
}

function numCountHash(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        obj[current] ? obj[current]++ : obj[current] = 1
    }

    return obj
}


console.log(sameFrequency(22, 222))