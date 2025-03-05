const numbers = [ -2, -5, 3, 0, 5, 8, 10] 
// count even and positive numbers

let evenPositive = numbers.reduce((acc, curr) => curr > 0 && curr % 2 === 0 ? acc + 1 : acc, 0)

console.log(evenPositive)




// sum of numbers of inner arrray  // [6, 35, 300]
const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ]


const newArray =[]
let sum1 = nums[0].reduce((acc, curr) => curr + acc)
let sum2 = nums[1].reduce((acc, curr) => curr + acc)
let sum3 = nums[2].reduce((acc, curr) => curr + acc)

newArray.push(sum1, sum2, sum3)

console.log(newArray)




// Find all the words that has 5 letters: [ 'HELLO, 'APPLE' ]
const words = [ 'hello', 'Tuesday', 'HEYY', 'Apple' ];
const array = []
for(const word of words) {
    if(word.length === 5) array.push(word.toUpperCase())
}

console.log(array)

