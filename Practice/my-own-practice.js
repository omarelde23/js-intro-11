/*
Calculate the product of 2 random numbers.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it.
*/

r1 = Math.round(Math.random() * (10 - 1)) + 1; 
r2 = Math.round(Math.random() * (10 - 1)) + 1; 
r3 = Math.round(Math.random() * (10 - 1)) + 1; 

console.log(`My two random numbers are ${r1} and ${r2}`);

let result = r1 * r2;
console.log(`The product of my two random numbers is ${result}`);


/*

Calculate the square of a number.

Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it.
*/

let random1 = Math.round(Math.random() * (10 - 1)) + 1; 
console.log(`My random number is ${random1}`); 

let squareOfNumber = random1 ** 2

console.log(`The square of my random number is ${squareOfNumber}`);



/*

Find if an age is allowed to get Driver License or not.

Write a program that generates a random number between 1 and 100 (both inclusive) to be considered as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.

*/

let number = Math.round(Math.random() * (100 - 1)) + 1;

console.log(`My random number is ${number}`); 

if(number >= 16){
    console.log('True')
}
else{
    console.log('False')
};




/*

Calculate the average of 3 random numbers.

Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it.
*/


let ran1 = Math.round(Math.random() * (10 - 1)) + 1;
let ran2 = Math.round(Math.random() * (10 - 1)) + 1;
let ran3 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(`My 3 random numbers are ${ran1}, ${ran2}, and ${ran3}.`);

let average = (ran1 + ran2 + ran3) / 3;

console.log(`The average of these numbers is ${average}`);




/*

Find if a number is even or not.

Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.

*/

let randomNumber = Math.round(Math.random() * (10 - 1)) + 1;

console.log(`My random number is ${randomNumber}`)

if(randomNumber % 2 === 0) {
    console.log('True')
}
else{
    console.log('False')
};


/*
Find if a number is divisible by 5 or not.

Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true.
Otherwise, print false.

*/

let myNumber = Math.round(Math.random() * (50 - 1)) + 1; 

console.log(`My random number is ${myNumber}`); 
console.log(myNumber % 5 === 0)



/*
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is odd, print true.
Otherwise, print false.
*/

let numb = Math.round(Math.random() * (10 - 1)) + 1
console.log(`My random number is ${numb}`);
console.log(numb % 2 !== 0);



/*
Find if a number is even or not.

Write a program that generates a random number between 1 and 10 (both inclusive). If the random number is even, print true.
Otherwise, print false.
*/

let myRandomNumber = Math.round(Math.random() * (10 - 1)) + 1; 
console.log(`My random number is ${myRandomNumber}`);

console.log(myRandomNumber % 2 === 0); 


/*
Find if a number is positive or not.

Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true.
Otherwise, print false.
*/

let rNumber = Math.round(Math.random() * (5 + 5 )) -5
console.log(`My random number is ${rNumber}`); 
console.log(rNumber >= 0);


/*
Convert miles to kilometers.

Write a program that generates a random number between 1 and 10 (both inclusive) to be considered as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
*/

let miles = Math.round(Math.random() * (10 - 1)) + 1;
console.log(`Number of miles is ${miles}`); 

console.log(`Number of kilometers is ${miles * 1.6}`);


/*
Find if 2 numbers are equal or not.

Write a program that generates 2 random numbers between 1 and 3 (both inclusive). If the numbers are equal, print true.
Otherwise, print false.
*/

let numb1 = Math.round(Math.random() * (3 - 1)) + 1;
let numb2 = Math.round(Math.random() * (3 - 1)) + 1;

console.log(`My random numbers are ${numb1}, ${numb2}`)
console.log(numb1 === numb2);




/*
Calculate the absolute difference between max and min of 3 random numbers.

Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.
*/

let numb11 = Math.round(Math.random() * (10 - 1)) + 1;
let numb12 = Math.round(Math.random() * (10 - 1)) + 1;
let numb13 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(`My three random numbers are ${numb11},${numb12},${numb13}`);

let maxx = Math.max(numb11, numb12, numb13);
let minn = Math.min(numb11, numb12, numb13);

console.log(`The absolute difference between the greatest and smallest numbers is ${Math.abs(maxx - minn)}`);




/*
Double The Word

Write a function named as doubleWord() which takes a string word as an argument and 
returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
*/

function doubleWord(str) {
    return str + str
}

console.log(doubleWord('Tech'));
console.log(doubleWord('Global'));




/*
Write a function named as firstCharacter() which takes a string word as an argument and 
returns the first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

function firstCharacter(str) {
    return str[0]
}

console.log(firstCharacter('Chicago')); 
console.log(firstCharacter('Texas')); 


/*
Write a function named as firstTwoCharacters() which takes a string word as an argument and 
returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/

function firstTwoCharacters(str) {
    return str.slice(0, 2)
}

console.log(firstTwoCharacters('Tech'))



/*
Write a function named as lastCharacter() which takes a string word as an argument and 
returns the last character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
*/

function lastCharacter(str) {
    return str[str.length - 1]
}

console.log(lastCharacter('Tech'))


/*
Write a function named as lastTwoCharacters() which takes a string word as an argument and 
returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function lastTwoCharacters(str) {
    return str.slice(-2)
}

console.log(lastTwoCharacters('h'))


/*
Write a function named as firstLast() which takes a string word as an argument and 
returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function firstLast(str) {
    if (str.length < 2) {
     return " "
    }
    else 
    return str[0] + str[str.length - 1]
    }


console.log(firstLast('t'))


/*
Has Five
Write a function named as hasFive() which takes a string word as an argument and 
returns true if given string has at least 5 characters, and false otherwise when invoked.
*/

function hasFive(str){
    return (str.length > 5);
}

console.log(hasFive('Omar'));
console.log(hasFive('Chicago'));


/*
Write a function named as middle() which takes a string word as an argument and 
returns the middle character if the string has odd length, and 
returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/

function middle(str) {
    if (str === '') {
        return ''
    }
    let theResult = str.length % 2 !== 0 ? str[Math.floor(str.length / 2)] : str[(str.length / 2) - 1] + str[(str.length / 2)]
    return theResult
}

console.log(middle('tech'))