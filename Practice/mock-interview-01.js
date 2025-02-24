/*
Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.

*/

let num = Math.round(Math.random() * (10 - 1)) + 1
console.log(`My random number is ${num}`);

console.log(num % 2 === 0)


/*
Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is odd, print true.
Otherwise, print false.
*/

let num1 = Math.round(Math.random() * (10 - 1)) + 1
console.log(`My random number is ${num1}`);

console.log(num1 % 2 !== 0);


/*
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is positive, print true.
Otherwise, print false.
*/

let ran = Math.round(Math.random() * (5 + 5)) -5
console.log(`My random number is ${ran}`);

console.log(ran >= 0);


/*
Write a program that generates a random number between -5 and 5 (both inclusive). If the random number is negative, print true.
Otherwise, print false.
*/

let ran1 = Math.round(Math.random() * (5 + 5)) -5
console.log(`My random number is ${ran1}`);

console.log(ran1 < 0);



/*
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true.
Otherwise, print false.
*/

let ra = Math.round(Math.random() * (50 - 1)) + 1
console.log(`My random number is ${ra}`); 

console.log(ra % 5 === 0) 


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it.
 
*/

let ra1 = Math.round(Math.random() * (10 - 1)) + 1;
let ra2 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random number is ${ra1}, ${ra2}`);

console.log(`the sum is ${ra1 + ra2}`)


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it.
*/

let ra11 = Math.round(Math.random() * (10 - 1)) + 1;
let ra12 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random number is ${ra11}, ${ra12}`);

console.log(`the abs difference is ${Math.abs(ra11 - ra12)}`);


/*
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
 Calculate the product of the numbers and print it.
*/

let ra111 = Math.round(Math.random() * (10 - 1)) + 1;
let ra122 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random number is ${ra111}, ${ra122}`);

console.log(`The produt is ${ra111 * ra122}`)


/*
Calculate the square of a number.
Write a program that generates a random number between 1 and 10 (both inclusive).
 Calculate the square of the number and print it.
*/

let ra1111 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random number is ${ra1111}`);

console.log(`The square of the number is ${ra1111 ** 2}`)


/*
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it.
*/

let rann = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random number is ${rann}`);

console.log(`The cube of my number is ${rann ** 3}`);

/*
Convert miles to kilometers.
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
*/

let rann1 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My miles is ${rann1}`);

console.log(`kilometers is ${rann1 * 1.6}`)


/*
Find if 2 numbers are equal or not.
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
 If the numbers are equal, print true.
Otherwise, print false.
*/

let r1 = Math.round(Math.random() * (3 - 1)) + 1;
let r2 = Math.round(Math.random() * (3 - 1)) + 1;
console.log(`My random numbers are ${r1}, ${r2}`)

console.log(r1 === r2)

/*
Find if an age is allowed to get Driver License or not.
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
*/

let r3 = Math.round(Math.random() * (100 - 1)) + 1;
console.log(`My random number is ${r3}`)

console.log(r3 >= 16)


/*
Find the greatest number between 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it.
*/

let r4 = Math.round(Math.random() * (10 - 1)) + 1;
let r5 = Math.round(Math.random() * (10 - 1)) + 1;
let r6 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random numbers are ${r4}, ${r5}, ${r6}`);

let greater = Math.max(r4, r5, r6);

console.log(`the max is ${greater}`);


/*
Calculate the average of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it
*/

let r7 = Math.round(Math.random() * (10 - 1)) + 1;
let r8 = Math.round(Math.random() * (10 - 1)) + 1;
let r9 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random numbers are ${r7}, ${r8}, ${r9}`);

let average = (r7 + r8 + r9) / 3
console.log(`average of the numbers is ${average}`);


/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.
*/

let r10 = Math.round(Math.random() * (10 - 1)) + 1;
let r11 = Math.round(Math.random() * (10 - 1)) + 1;
let r12 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random numbers are ${r10}, ${r11}, ${r12}`);

let max = Math.max(r10, r11, r12);
let min = Math.min(r10, r11, r12);

console.log(`The absolute difference is ${Math.abs(max - min)}`);


/*
Find the quarter of a random number between 1 and 100.

Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75 
4th quarter is 76-100
*/

let r13 = Math.round(Math.random() * (100 - 1)) + 1;
console.log(`My random number is ${r13}`);

let result = r13 <= 25 ? '1st quarter' : r13 > 25 && r13 <= 50 ? '2nd quarter' : r13 > 50 && r13 <= 75 ? '3rd Quarter' : '4th Quarter'

console.log(result);


/*
Find the midpoint of a random number between 1 and 100.

Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
*/

let r14 = Math.round(Math.random() * (100 - 1)) + 1;
console.log(`My random number is ${r14}`);

let result1 = r14 <= 50 ? '1st Half' : 'Second half';

console.log(result1);


/*
Find if sum of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
 If the sum of the random numbers is even, print true.
Otherwise, print false.
*/

let r15 = Math.round(Math.random() * (10 - 1)) + 1;
let r16 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random numbers are ${r15}, ${r16}`);

console.log((r15 + r16) % 2 === 0);


/*
Find if product of 2 random numbers is odd or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true.
Otherwise, print false.
*/


let r17 = Math.round(Math.random() * (10 - 1)) + 1;
let r18 = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`My random numbers are ${r17}, ${r18}`);

console.log((r17 * r18) % 2 !== 0);


/*
Area of a rectangle
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
*/

function rectangleArea(x, y) {
    return x * y
}

console.log(rectangleArea(5, 9));


/*
Perimeter of a rectangle.

Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Perimeter = 2 * (x + y)
*/

function rectanglePerimeter(x, y) {
    return 2 * (x + y)
}

console.log(rectanglePerimeter(5, 10))


/*
Double The Word

Write a function named as doubleWord() which takes a string word as an argument and 
returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
*/

function doubleWord(str) {
    return str + str
}

console.log(doubleWord('tech'));


/*
First Character
Write a function named as firstCharacter() which takes a string word as an argument and 
returns the first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

function firstCharacter(str) {
    return str[0]
}

console.log(firstCharacter('tech'));


/*
First Two Characters

Write a function named as firstTwoCharacters() which takes a string word as an argument and returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/

function firstTwoCharacters(str) {
    return str.slice(0, 2)
}

console.log(firstTwoCharacters('Global'));

/*
Write a function named as lastCharacter() which takes a string word as an argument and 
returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

function lastCharacter(str) {
    return str[str.length -1]
}

console.log(lastCharacter('tech'));


/*
Last Two Characters

Write a function named as lastTwoCharacters() which takes a string word as an argument and 
returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function lastTwoCharacters(str) {
    return str.slice(-2)
}

console.log(lastTwoCharacters('global'));


/*
First and Last Characters

Write a function named as firstLast() which takes a string word as an argument and
returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function firstLast(str) {
    return str[0] + str.slice(-1)
}

console.log(firstLast('global'));


/*
Write a function named as hasFive() which takes a string word as an argument and 
returns true if given string has at least 5 characters, and false otherwise when invoked.
*/

function hasFive(str) {
    return str.length >= 5
}

console.log(hasFive('Tech'));
console.log(hasFive('Teech'));
console.log(hasFive(''));


/*
Middle

Write a function named as middle() which takes a string word as an argument and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/

function middle(str) {
    
}



/*
Longer String
Write a function named as longer() which takes two string words as arguments and returns 
the string that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
*/

function longer(str1, str2) {
    return str1.length >= str2.length ? str1 : str2
}

console.log(longer('Global', 'Tech'));


/*
Write a function named as shorter() which takes two String words as arguments and 
returns the String has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
*/

function shorter(str1, str2) {
    return str1.length >= str2.length ? str2 : str1
}

console.log(shorter('Tech', 'Omar'))


/*
Write a function named as concat() which takes two string words as arguments and 
returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string 
*/

function concat(str1, str2) {
    return str1 + str2
}

console.log(concat('Tech', 'Global'));


/*
Starts With Vowel

 Write a function named as startsVowel() which takes a string word as an argument and 
 returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/














