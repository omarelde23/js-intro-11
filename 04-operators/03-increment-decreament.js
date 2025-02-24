let age = 25;


age++;
age++; 

console.log(age); // 27

let quantity = 10; 

quantity--;
quantity--;

console.log(quantity); // 8


// Difference between post and pre increment/decrement
let i = 10; 

let j = i++;
console.log('i value is ')


let multiplier = 5;

console.log(10 * multiplier++); // 50
console.log(10 * multiplier); //60
console.log(10 * ++multiplier); // 70

let divisor = 4;

console.log(9 / --divisor); // 3

let counter = 5;
let result = counter++; // counter = 5 , result = 5,

console.log(++counter * result); // 35 , result = 5, counter = 7

// well mostly use post-increment or post decrement
