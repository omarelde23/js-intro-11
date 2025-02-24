// startsWith() vs endsWith()

let company = 'TechGlobal'

console.log(company.startsWith('T')); // true
console.log(company.startsWith('Tech')); // true

console.log(company.startsWith('t')); // false
console.log(company.toLowerCase().startsWith('t')); // true


console.log(company.endsWith('l')); // true
console.log(company.endsWith('Global')); // true


console.log(company.startsWith('') && company.endsWith('')); // true



// includes()

let quote = `Let's do it`; 

console.log(quote.includes('')); true
console.log(quote.includes(' ')); true
console.log(quote.includes('do')); true
console.log(quote.includes('let')); false

