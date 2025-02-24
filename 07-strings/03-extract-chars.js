let company = 'TechGlobal'; 

// Get char using property access
console.log(comapny[0]); // 'T'
console.log(comapny[8]); // 'a'


// get first and last chars

let greeting = 'good morning';

let firstChar = greeting[0];
// let lastChar = greeting[1]; // this will always change

let lastChar = greeting[greeting.length - 1];
console.log(lastChar); 


// charAt()
let city = 'Chicago'; 
city.charAt(2); // city[2];   // 'i'



// at()
let color = 'Purple';
console.log(color.at(0)); // 'P'
console.log(color.at(color.length - 1)); // 'e'


// EDGE CASES
let name = 'Max';
console.log(name[-1]); // undefined
console.log(name[3]); // undefined

console.log(name.charAt(-1)); // ''
console.log(name.charAt(3)); // ''

console.log(name.at(-1)); // 'x'
console.log(name.at(-2)); // 'a'
console.log(name.at(3)); // undefined