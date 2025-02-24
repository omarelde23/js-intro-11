let n1 = 3;
let n2 = '5';
let n3 = 4;
let n4 = '10';

console.log(n1 + n2); // '35'
console.log(n1 + n3 + n4 + n2); // '7105'
console.log(n1 + (n3 + n4) + n2); // '34105'

console.log(n2 * n1); // 15

console.log(n4 / n2); // 2

console.log('Hello' / 2); // NaN

// true is 1 and false is 0
console.log(5 * true); // 5
console.log(5 * false); // 0

// empty space '' is 0 too
console.log(5 * ''); // 0


console.log('The sum of 3 and 5 = ' + (3 + 5)); // The sum of 3 and 5 = 8
console.log('The difference of 5 and 3 = ' + (5 - 3)); // The difference of 5 and 3 = 2
console.log('The product of 3 and 5 is = ' + 3 * 5); // The product of 3 and 5 is = 15
console.log('The division of 6 and 2 is = ' + 6 / 2); // The division of 6 and 2 is = 3
console.log('The remainder of 6 and 2 is = ' + 6 % 2); // The remainder of 6 and 2 is = 0