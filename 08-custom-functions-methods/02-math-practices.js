/*
Generate 3 random numbers between 50 and 100 (both inclusive) and find the max and min
*/

const { getRandomNumber } = require('./../utils/MathHelper.js'); 

let r1 = getRandomNumber(50, 100); 
let r2 = getRandomNumber(50, 100); 
let r3 = getRandomNumber(50, 100); 

console.log(r1, r2, r3);
console.log(Math.max(r1, r2, r3));
console.log(Math.min(r1, r2, r3));