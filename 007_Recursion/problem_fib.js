//recursive function called fib
// accepts a number
//returns the nth number in the fibonacci sequence

const fib = (num) => {
    console.log({num})
    console.log(num - 1, num - 2)
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(28))
