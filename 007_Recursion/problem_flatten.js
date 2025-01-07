// //flatten
// //accepts an array of arrays and returns a new array
// //with all the values flattened

// // function flatten(arr) {
// //     let flattened = []
// //     if (arr.length === 0) return []
// //     if (typeof arr[0] === 'number') {
// //         flattened.push(arr[0])
// //         return flattened.concat(flatten(arr.slice(1)))
// //     } else {
// //         return flatten(arr[0]).concat(flatten(arr.slice(1)))
// //     }
// // }

// // function flatten(arr) {
// //     let flattened = []
// //     for (let i = 0; i < arr.length; i++) {
// //         console.log({arr, flattened})
// //         if (Array.isArray(arr[i])) {
// //             console.log("if")
// //             flattened = flattened.concat(flatten(arr[i]))
// //         } else {
// //             console.log("else")
// //             flattened.push(arr[i])
// //         }
// //     }
// //     return flattened
// // }

// // const flatten = arr => {
// //     let flattened = []
// //     for (let i = 0; i < arr.length; i++) {
// //         if (Array.isArray(arr[i])) {
// //             flattened = flattened.concat(flatten(arr[i]))
// //         } else {
// //             flattened.push(arr[i])
// //         }
// //     }
// //     return flattened
// // }


// // console.log(flatten([1, [2, [3, 4], [[5]]]]))// [1, 2, 3, 4, 5]// 
// // // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// // // flatten([[1],[2],[3]]) // [1,2,3]
// // // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


// // // [1, [2, [3, 4], [[5]]]]


// // const flatten = arr => {
// //     console.log({arr})
// //     if (arr === undefined) return []
// //     if (typeof arr !== Number && arr.length === 0) return []
// //     if (typeof arr[0] === Number) {
// //         console.log("typeof arr[0]", typeof arr[0], "arr[0]", arr[0]);
// //         return arr[0].concat(flatten(arr.slice(1)));
// //     } else {
// //         console.log("typeof arr[0]", typeof arr[0], "arr[0]", arr[0]);
// //         return flatten(arr[0]).concat(flatten(arr.slice(1)));
// //     }


// // }

// // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); 
// // console.log(flatten([[1], [2]]));

// // console.log(flatten([1, [2, [3, 4], [[5]]]]));

// const ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
// const suits = ['D', 'C', 'H', 'S']
// const deck = []

// for (let i = 0; i < suits.length; i++) {
//     const suit = suits[i]
//     for (let j = 0; j < ranks.length; j++) {
//         const rank = ranks[j]
//         const card = suit + rank
//         deck.push(card)
//     }
// }


// const play = deck =>{
//     const deckHalfs = cut(deck)
//     const newDeck = shuffle(deckHalfs[0], deckHalfs[1])

    
  
// }

// const shuffle = (deck1, deck2) => {
//     if (deck1.length === 0 && deck2.length > 0) {
//         shuffle(deck2, deck1)
//     } else if (deck2.length === 0 && deck1.length === 0){
//         return []
//     }

    
// }

// const cut = deck => {
//     const half = Math.round(deck.length/2)
//     const firstHalf = deck.slice(0, half)
//     const secondHalf = deck.slice(half)
//     return [firstHalf, secondHalf]
// }



// console.log(deck)


const flatten = arr => {
    if (arr.length === 0) {
        return []
    }
    let first
    if (Array.isArray(arr[0])) {
        first = flatten(arr[0])
    } else {
        first = [arr[0]]
    }

    let rest = flatten(arr.slice(1))
    first.concat(rest)
}

function flatten(arr) {
    if (arr.length === 0) {
        return [];
    }
    let first;
    if (Array.isArray(arr[0])) {
        first = flatten(arr[0]);
    } else {
        first = [arr[0]];
    }
    const rest = flatten(arr.slice(1));
    return first.concat(rest);
}

console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3