//write a function called power
// accepts a base and an exponent
//the function should return the power of the base
//to the exponent 
//should mimic the Math.pow()

function power(num, exp) {
    if (exp === 0) return 1
    return num * power(num, exp - 1)
}

// power(2, 4)
// 2 * power(2, 3)
// 2 * 2 * power(2, 2)
// 2 * 2 * 2 * power(2, 1)
// 2 * 2 * 2 * 2 * power(2, 0)



console.log(power(2, 4))