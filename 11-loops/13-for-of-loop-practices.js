// Count how many positive numbers you have in the array -> 4

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let count = 0
for(const number of numbers) {
    if(number >= 1) count++
}

console.log(count)


// Count how many negative numbers you have in the array -> 3

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let counter = 0
for(const number of numbers) {
    if(number < 0) counter++
}

console.log(counter)


// Count how many even numbers are in thr array  -> 7

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countEven = 0

for(const number of numbers) {
    if(number % 2 === 0) countEven++
}

console.log(countEven)



// Count how many Positive Odd numbers are in thr array  -> 2

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
let countP = 0

for(const number of numbers) {
    if(number > 0 && number % 2 !== 0) countP++
}

console.log(countP)





