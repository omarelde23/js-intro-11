const numbers = [ 3, 6, 10, 4 ]

let countEven = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc, 0)

console.log(countEven)

let sum = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(sum)


let product = numbers.reduce((acc, curr) => acc * curr, 1)

console.log(product)


let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity)

console.log(max)


// find shortest fruit 

const fruits = [ 'Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon' ]

let shortestFruit = fruits.reduce((acc, curr) => curr.length > acc.length ? acc : curr, fruits[0])

console.log(shortestFruit)