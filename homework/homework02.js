console.log('\n --------TASK01---------\n');
/*Convert given Strings below to number data types 
and find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
*/


let str1 = '5';
let str2 = '2';

let num1 = Number(str1)
let num2 = Number(str2)

console.log(`The sum is ${num1 + num2}`); 
console.log(`The difference is ${num1 - num2}`); 
console.log(`The product is ${num1 * num2}`); 
console.log(`The division is ${num1 / num2}`); 
console.log(`The remainder is ${num1 % num2}`); 
console.log(`The exponentiation is ${num1 ** num2}`); 




console.log('\n --------TASK02---------\n');
/*
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50
*/

let s1 = '200'
let s2 = '-50'

let n1 = Number(s1);
let n2 = Number(s2); 


console.log(`The max is ${Math.max(n1, n2)}`);
console.log(`The min is ${Math.min(n1, n2)}`);
console.log(`The average is ${(n1 + n2) / 2}`);
console.log(`The absolute difference is ${Math.abs(n1 - n2)}`);





console.log('\n --------TASK03---------\n');
/*
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
*/

num1 = Math.round(Math.random() * (50 - 1)) + 1;
num2 = Math.round(Math.random() * (50 - 1)) + 1;

console.log(`My random numbers are ${num1} and ${num2}.`);
console.log(`The absolute difference of these numbers is = ${Math.abs(num1 - num2)}`);




console.log('\n --------TASK04---------\n');
/*
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers
*/

let r1 = Math.round(Math.random() * (50 - 1)) + 1;
let r2 = Math.round(Math.random() * (50 - 1)) + 1;
let r3 = Math.round(Math.random() * (50 - 1)) + 1;
let r4 = Math.round(Math.random() * (50 - 1)) + 1;
let r5 = Math.round(Math.random() * (50 - 1)) + 1;

console.log(`My random numbers are ${r1}, ${r2}, ${r3}, ${r4}, and ${r5}`);

let max = Math.max(r1, r2, r3, r4, r5);
let min = Math.min(r1, r2, r3, r4, r5);

console.log(`The max is ${max}`);
console.log(`The min is ${min}`);




console.log('\n --------TASK05---------\n');

/*
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
*/

let ran1 = Math.round(Math.random() * (100 - 50)) + 50;
let ran2 = Math.round(Math.random() * (100 - 50)) + 50;
let ran3 = Math.round(Math.random() * (100 - 50)) + 50;

console.log(`My random numbers are ${ran1}, ${ran2}, and ${ran3}.`);

let sum = ran1 + ran2 + ran3;
console.log(`The sum of these numbers is ${sum}.`);


console.log('\n --------TASK06---------\n');

/*
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25.
*/

let rand1 = Math.round(Math.random() * (100 - 1)) + 1;
let rand2 = Math.round(Math.random() * (100 - 1)) + 1;
let rand3 = Math.round(Math.random() * (100 - 1)) + 1;

console.log(`My random numbers are ${rand1}, ${rand2}, and ${rand3}.`);

console.log(rand1 > 25 && rand2 > 25 && rand3 > 25); 



console.log('\n --------TASK07---------\n');

/*
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
*/

let name = 'David'
console.log(`The length is ${name.length}`);
console.log(`The first character is ${name[0]}`);
console.log(`The last character is ${name[name.length - 1]}`);
console.log(`The first three characters is ${name.slice(0, 3)}`);
console.log(`The last three characters is ${name.slice(-3)}`);
