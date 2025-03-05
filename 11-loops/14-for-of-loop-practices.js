// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
let sum = 0
for(const number of numbers) {
    sum += number
}

console.log(sum)
console.log(sum / numbers.length)


// find the product of all the numbers starting from index of 3  -> 84
numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
let product = 1

for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i] 
}

console.log(product)
