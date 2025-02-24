// properties
Math.PI; // 

console.log(Math.PI);


// methods
console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5


let a1 = Math.abs(3 - 5) - 3; 
console.log(a1); // -1 


let a2 = Math.abs(Math.abs(2 * 5 - 3) - 15); 
console.log(a2); // 8 


let userAge1 = 15;
let userAge2 = 20;

console.log(`the age difference is ${Math.abs(userAge2 - userAge1)}`); 


// ceil(), floor(), trunc(), round()
console.log(Math.trunc(10.99)); 10
console.log(Math.trunc(10.01)); 10

console.log(Math.round(10.99)); // 11
console.log(Math.round(10.01)); // 10
console.log(Math.round(10.49)); // 10
console.log(Math.round(10.50)); // 11
console.log(Math.round(10.51)); // 11

console.log(Math.round(3.4923)); // 3
console.log(Math.round(3.4947)); // 3
console.log(Math.round(3.4999)); // 3

console.log(Math.ceil(10.01)); // 11

console.log(Math.floor(10.01)); // 10
console.log(Math.floor(10.99)); // 10


// pow()

Math.pow(2, 3); // 2 ** 3
console.log(Math.pow(2, 3)); // 8 
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(5)); // NaN


// sqrt()

console.log(Math.sqrt(49)); // 7
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(10)); // 3.1622776601683795

console.log(Math.sqrt(10).toFixed(1)); // 3.2


// max(), min()

console.log(Math.max(5, 3, 10)); // 10

console.log(Math.min(10, 5, 3, 1)); // 1







