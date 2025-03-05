const numbers = [ 5, 7, 1, 3, 10 ]

numbers.forEach((x) => console.log(x * 2))



// print the names that have 4 characters 
const names = [ 'Maria', 'Alex', 'John', 'Jane', 'Victoria' ]

names.forEach(function(x) {
    if(x.length === 4) console.log(x)
})


// find sum of numbers
// find product of numbers
// create a new array which has all numbers multiplied by 5

const nums = [ 5, 3, 2, 1 ]

let sum = 0
let product = 1
const arr = []
nums.forEach(function(x) {
    sum += x
    product *= x
    arr.push(x * 5)
})

console.log(sum)
console.log(product)
console.log(arr)