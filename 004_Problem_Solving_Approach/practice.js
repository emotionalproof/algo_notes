//type 0: discounted price, the item is sold for a given price
//type 1: percentage discount, the customer is given a fixed percentage discount from the retail price
//type 2: fixed discount, the customer is given a fixed amount off from the retail price

//[price, tag1, tag2, tag . . . ]
//n = item
//m = descriptor
// let products = [
//     ['10', 'd0', 'd1'],
//     ['15', 'EMPTY', 'EMPTY'],
//     ['20', 'd1', 'EMPTY']
// ]


//['tag name', 'type', 'amount']
//n = tag
//m = descriptor

// let discounts = [
//     ['d0', '1', '27']
//     ['d1', '2', '5']
// ]


//iterate over each product
//index 0 is the current price
//for each element after the price, if empty, then skip
//else, put in helper function to get lowest price for each item
//add the price to a running total


function findLowestPrice(discounts, products) {
    let total = 0
    let discountObj = {}

    for (let i = 0; i < discounts.length; i++) {
        discountObj[discounts[i][0]] = [discounts[i][1], discounts[i][2]]
    }
    for (let j = 0; j < products.length; j++) {
        let product = products[j]
        let price = parseInt(product[0])
        let smallest = parseInt(product[0])
        let h = 1
        while (h < product.length) {
            let tagType = null
            let discAmt = null
            if (!!discountObj[product[h]]) {
                tagType = discountObj[product[h]][0]
                discAmt = parseInt(discountObj[product[h]][1])
            }

            if (tagType === '0') {
                smallest = Math.min(smallest, discAmt)
            } else if (tagType === '1') {
                let newPrice = Math.floor(price - (price * (discAmt/100)))
                smallest = Math.min(smallest, newPrice) 
            } else if (tagType === '2') {
                let newPrice = price - discAmt
                smallest = Math.min(smallest, newPrice) 
            } else if (tagType === null) {
            }
            h++
        }
        total += Math.min(price, smallest)
    }
    return total
}



let products = [
    ['10', 'd0', 'd1'],
    ['15', 'EMPTY', 'EMPTY'],
    ['20', 'd1', 'EMPTY']
]


//['tag name', 'type', 'amount']
//n = tag
//m = descriptor

let discounts = [
    ['d0', '1', '27'],
    ['d1', '2', '5']
]


console.log(findLowestPrice(discounts, products))
