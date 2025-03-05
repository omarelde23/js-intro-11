// Find the sum of numbers that has even index -> 19

const numbers = [ 3, 4, 7, 3, 2, 2, 7 ]
let sum = 0
for(let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i]
}

console.log(sum)


// find the product of numbers that has odd index -> 24
numbers = [ 3, 4, 7, 3, 2, 2, 7 ]

let product = 1
for(let i = 1; i < numbers.length; i += 2) {
    product *= numbers[i]
}

console.log(product)




