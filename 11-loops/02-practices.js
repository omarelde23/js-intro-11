// Output the numbers from 100 to 0 (both inclusive)

for(let i = 100; i >= 0; i--) {
    console.log(i)
}


// output even numbers

for(let i = 0; i <= 50; i++) {
    if (i % 2 === 0) console.log(i)
}

// output divisible by 5

for(let i = 0; i <= 50; i++) {
    if (i % 5 === 0) console.log(i)
}

// Find sum of the numbers from 1 to 5 -> 15
let sum = 0
for(let i = 1; i <= 5; i++) {
   sum += i
}

console.log(sum)


//  find sum of numbers from 10 to 15

let sum1 = 0
for(let i = 10; i <= 15; i++) {
    sum1 += i
}
console.log(sum1)


// product of numbers from 1 to 6

let result = 1
for(let i = 1; i <= 6; i++) {
    result *= i
}
console.log(result)


// output each character

let str = 'TechGlobal School'
 
for(let i = 0; i <= str.length - 1; i++) {
    console.log(str[i])
}


// count how many a's we have in the below string  -> 3

let fruit = 'banana' 
let counterA = 0

for(let i = 0; i <= fruit.length - 1; i++) {
    if (fruit[i] === 'a') counterA++
}

console.log(counterA)


// 

