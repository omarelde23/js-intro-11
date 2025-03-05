// find the first even number from the array   -> 0

nums = [ -1, 1, 3, 0, 2, 6, 8 ]

let firstEven = nums.find((num) => num % 2 === 0)
console.log(firstEven)


// find the index

nums = [ -1, 1, 3, 0, 2, 6, 8 ]

let firstEvenIndex = nums.findIndex((num) => num % 2 === 0)
console.log(firstEvenIndex)



// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

const cities = [ 'Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA' ]

let firstElement = cities.find((x) => x.length === 4)
let lastElement = cities.findLast((x) => x.length === 6)



console.log(firstElement)
console.log(lastElement)
console.log(cities.findIndex((x) => x === 'LA'))
console.log(cities.find((x) => x.toLowerCase().includes('i')))
console.log(cities.findLast((x) => x.length === 4))





