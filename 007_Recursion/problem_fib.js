//recursive function called fib
// accepts a number
//returns the nth number in the fibonacci sequence

function fib(num) {
    // if (num === 1 || num === 2) return 1
    // if (num === 0) return 1
    if (num <= 2) return 1
    return fib(num - 1) + fib(num - 2)
}

// fib(3)     3                  +              fib(2) 2
//     fib(2)      + fib(1)                 fib(1) + fib(0)
//         1     1                       1       1

console.log(fib(5))