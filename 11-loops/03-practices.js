// Output all the odd numbers from 1 to random number
// between 10 and 20

let r1 = Math.round(Math.random() * (20 - 10)) + 10
console.log(`my random number is ${r1}`)

for(let i = 1; i <= r1; i++) {
    if(i % 2 !== 0) console.log(i)
}

// 

let r2 = Math.round(Math.random() * (10 - 1)) + 1
console.log(`My random number is ${r2}`)

let total = 1

for(let i = 1; i <= r2; i++) {
    total *= i
}

console.log(total)


/*
Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

r11 = Math.round(Math.random() * (10 - 1)) + 1
r12 = Math.round(Math.random() * (10 - 1)) + 1

console.log(`My random numbers are ${r11} and ${r12}`)

for(let i = Math.min(r11, r12); i <= Math.max(r11, r12); i++) {
    console.log(i)
}