// Overlapping Subproblems

// Optimal Substructure
// propblem is said of have this if an optimal
// solution can be constructed from ooptimal solutions of its subproblmes

// solve a problem by solving subproblems

// Longest Increasing Subsequence (LIS)
// For a sequence a1, a2, ... , an,
// find the length of the longest increasing subsequence
// LIS([3, 1, 8, 2, 5]) => 1, 2, 5 => 3

// 1. VISUALIZE EXAMPLES
// we can used a directed acyclic graph
// imagine each element is a node in a graph
// we add a directed edge to each node that is larger
// The answer corresponds to the Longest Path in this
// Directed Acyclic Graph + 1

// 2. FIND APPROPRIATE SUBPROBLEM
// Simpler version of our overall problem
// Find a subset using the start and end
// Subproblem: LIS[k] = LIS ending at index k
// LIS[3] => (1, 2 ) = 2

// 3. FIND RELATIONSHIPS AMONG SUBPROBLEMS
// Lets say you wanted to find the LIS increasing at index 4
// what subproblems are needs to solve this?
// index 4 needs to go through index 0
// so what is the LIS ending at i0
// equals 1: 3
// what about index 1
// that is also 1: 1
// index 2
// is 2: either 3,8 or 1,8
// index 3
// is 2: 1,2
// LIS[4] = 1 + max{LIS[0], LIS[1], LIS[2], LIS[3]}
// LIS[4] = 1 + 2

// LIS[3] = 1 + max{LIS[0], LIS[1], LIS[2]}
// LIS[3] = 1 + 2

// LIS[2] = 1 + max{LIS[0], LIS[1]}
// LIS[2] = 1 + 1

// LIS[1] = 1 + max{LIS[0]}
// LIS[1] = 1 + 1

// LIS[0] = 1

// 4.GENERALIZE THE RELATIONSHIP

function fib(n, memo = {}) {
    if (n === 0) return 0;
    if (n <= 2) return 1;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
// console.log(fib(11));

function fastFib(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
        console.log({ a, b });
        [a, b] = [b, a + b];
    }
    return b;
}

let first = 0;
let second = 1;

function fibby(n) {
    let first = 0;
    let second = 1;
    for (let i = 1; i < n; i++) {
        [first, second] = [second, first + second];
    }
    return second;
}

// console.log(fibby(12));

function fibMemo(n, memo = {}) {
    if (n === 0) return 0;
    if (n <= 2) return 1;
    if (memo[n]) return memo[n];
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
// let n = 1476;
// console.log(fibMemo(n));
// console.log(fibby(n));

//Tabulation
function fibTab(n) {
    const tab = [0, 1];
    for (let i = 2; i <= n; i++) {
        tab[i] = tab[i - 1] + tab[i - 2];
    }
    return tab[n];
}

// console.log(fibTab(n));

function minCoinChange(coins, amount) {
    let result = [];
    for (let i = coins.length - 1; i >= 0; i--) {
        let coin = coins[i];
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    if (amount !== 0) return [];
    return result;
}

// console.log(minCoinChange([1, 2, 3, 4, 5], 11));
function coinChange(denominations, value) {
    // ways[i] will store the number of ways to make amount i
    const ways = new Array(value + 1).fill(0);
    console.log("--------------", `Coin 0`, "--------------");
    ways[0] = 1; // There’s one way to make 0: use nothing
    console.log({ ways }, " coin: 0");

    for (let coin of denominations) {
        console.log("--------------", `Coin ${coin}`, "--------------");
        console.log({ ways, coin });
        for (let i = coin; i <= value; i++) {
            console.log(
                "--------------",
                `Coin ${coin} | Value ${i}`,
                "--------------"
            );
            console.log({ i, coin }, "i - coin:", i - coin);
            console.log("ways[i]: ", ways[i]);
            console.log("ways[i - coin]: ", ways[i - coin]);
            ways[i] += ways[i - coin];
            console.log({ ways });
        }
    }
    console.log({ ways });
    return ways[value];
}

// const denominations = [2, 3, 4, 5, 6];

// console.log(coinChange(denominations, 7));

// i want to see how many combos of coins produce a given value
// it accepts an array of denominations and a value
// for each coin, we wil iterate from the size of the coin up until the target value
//

let n = 5;
let steps = [1, 3, 5];
[11111][113][131][311][5];

// if i am at a certain step, how did i get there
// i could have come from n - 1 if i just took a 1 step; n - 3 just took a 3 step , n - 5 just took a 5 step
// so ways(n) = ways(n - 1) + ways(n - 3) + ways(n - 5)