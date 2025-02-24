/*
Write a function named as startsVowel() which takes a string word as an argument
 and returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/

function startsVowel(str) {
    return 'aeiouAEIOU'.includes(str[0])
}

console.log(startsVowel('omar'));





/*
Write a function named as concat() which takes two string words as arguments 
and returns the words concatenated when invoked.
NOTE: Concatenation should always be as first string + second string .
*/


function concat(str1, str2) {
    return str1 + str2
}

console.log(concat('global', 'Tech'));


/*
Write a function named as shorter() which takes two String words as arguments and
returns the String has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
*/

function shorter(str1, str2) {
    let result = str1.length >= str2.length ? str2 : str1;
    return result
}

console.log(shorter('Tech', 'omar'));


/*
Write a function named as middle() which takes a string word as an argument and 
returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/

function middle(str) {
    if (str === '') {
        return ''
    }
    else if (str.length % 2 !== 0) {
        return str[Math.floor(str.length / 2)]
    }
    else {
        return str[(str.length / 2) - 1] + str[str.length / 2]
    }
};

console.log(middle('omear'));


/*
Write a function named as hasFive() which takes a string word as an argument and 
returns true if given string has at least 5 characters, and false otherwise when invoked.
*/

function hasFive(str) {
    return str.length >= 5
};

console.log(hasFive('Omar'));


/*
Write a function named as firstLast() which takes a string word as an argument and 
returns the first and the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back
*/

function firstLast(str) {
    if (str.length < 2) {
        return str
    }
    return str[0] + str[str.length - 1]
}; 

console.log(firstLast('h'));

/*
Write a function named as lastTwoCharacters() which takes a string word as an argument 
and returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
*/

function lastTwoCharacters(str) {
    return str.slice(-2)
};

console.log(lastTwoCharacters('e'));

/*
Write a function named as firstTwoCharacters() which takes a string word as an argument 
and returns the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
*/

function firstTwoCharacters(str) {
    return str.slice(0, 2)
};

console.log(firstTwoCharacters('tech'));


/*
Calculate the average of 3 random numbers.

Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it.
*/

let r1 = Math.round(Math.random() * (10 - 1)) + 1;
let r2 = Math.round(Math.random() * (10 - 1)) + 1;
let r3 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(`My random numbers are ${r1}, ${r2}, ${r3}`); 

let result = (r1 + r2 + r3) / 3

console.log(`The average is ${result}`);

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.
*/

let r11 = Math.round(Math.random() * (10 - 1)) + 1;
let r12 = Math.round(Math.random() * (10 - 1)) + 1;
let r13 = Math.round(Math.random() * (10 - 1)) + 1;

console.log(`My random numbers are ${r11}, ${r12}, ${r13}`); 

console.log(`The max is ${Math.max(r11, r12, r13)}`);
console.log(`The min is ${Math.min(r11, r12, r13)}`);

let max = Math.max(r11, r12, r13);
let min = Math.min(r11, r12, r13)

console.log(`The absoulete difference between these is ${Math.abs(max - min)}`);


/*
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
*/

let ran = Math.round(Math.random() * (100 - 1)) + 1
console.log(`My random number is ${ran}`);


if (ran <= 25) {
    console.log('1st Quarter')
}
else if (ran > 25 && ran <= 50) {
    console.log('2nd Quarter')
}
else if (ran > 50 && ran <= 75) {
    console.log('3rd Quarter')
}
else console.log('4th Quarter');


/*
Find the midpoint of a random number between 1 and 100.

Write a program that generates a random number between 1 and 100 (both inclusive).
 Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
*/


let random = Math.round(Math.random() * (100 - 1)) + 1
console.log(`My random number is ${random}`); 

if (random <= 50) {
    console.log('1st Half')
}
else console.log('2nd Half');


/*
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true.
Otherwise, print false.
*/

let random1 = Math.round(Math.random() * (50 - 1)) + 1
console.log(`My random number is ${random1}`);

console.log(random1 % 5 === 0)


/*
Write a program that generates a random number between -5 and 5 (both inclusive).
 If the random number is negative, print true.
Otherwise, print false.
*/


let random2 = Math.round(Math.random() * (5 + 5)) - 5
console.log(`My random number is ${random2}`);

console.log(random2 < 0);





