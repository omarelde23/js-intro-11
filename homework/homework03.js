/*
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50
*/

console.log('\n --------TASK01---------\n');

let r1 = Math.round(Math.random() * (100 - 1)) + 1;
let r2 = Math.round(Math.random() * (100 - 1)) + 1;
let r3 = Math.round(Math.random() * (100 - 1)) + 1;

console.log(`My random numbers are ${r1}, ${r2}, ${r3}`); 

let result = ((r1 + r2 + r3) / 3 ) >= 50;

console.log(result);



/*
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
*/

console.log('\n --------TASK02---------\n');

let ran1 = Math.round(Math.random() * (3 - 1)) + 1
let ran2 = Math.round(Math.random() * (3 - 1)) + 1
let ran3 = Math.round(Math.random() * (3 - 1)) + 1

console.log(`My random numnbers are ${ran1}, ${ran2}, ${ran3}`);

if ((ran1 === ran2) && (ran1 === ran3)) {
    console.log('Triple Match')
}
else if  (ran1 === ran2 || ran1 === ran3 || ran2 === ran3) {
    console.log('Double Match')
    }
else {
    console.log('No match')
}




/*
Write a function named as hasA() which takes a string word as an argument and 
returns true if given string has a character "a" or "A", and false otherwise when invoked.

*/

console.log('\n --------TASK03---------\n');

function hasA(str) {
    return (str.includes('a') || str.includes('A'));
}

console.log(hasA('Omr')); 


/*
Write a function named as doubleOrTripleWord() which takes a string word as an argument and 
returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

*/

console.log('\n --------TASK04---------\n');

function doubleOrTripleWord(str) {
    return (str.length % 2 === 0) ? str + str + str : str + str
}

console.log(doubleOrTripleWord('Tech'));



/*
Write a function named as firstWord() which takes a string word as an argument and
 returns the first word from the given string when invoked.
*/


console.log('\n --------TASK05---------\n');

function firstWord(str) {
    return str.split(' ')[0]
}

console.log(firstWord('Tech Global'))


console.log('\n --------TASK06---------\n');
/*
Write a function named as lastWord() which takes a string word as an argument and returns
the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.
*/


function lastWord(str) {
    let str1 = str.split(' ')
    return str1[str1.length - 1]
}

console.log(lastWord('School is tech global'));




/*
Write a function named as firstlastWord() which takes a string word as an argument and
returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.
*/

console.log('\n --------TASK07---------\n');


function firstlastWord(str) {
    let str2 = str.split(' ')
    return str2[0] + str2[str2.length - 1]
}

console.log(firstlastWord('School is Tech Global'));



/*
Write a function named as startVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
*/

console.log('\n --------TASK08---------\n');

function startVowel(str) {
    return (/^[aeiou]/i.test(str))
}

console.log(startVowel('tech'));



/*
Write a function named as swap4() which takes a string word as an argument and 
returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.
*/

console.log('\n --------TASK09---------\n');

function swap4(str) {
    if (str.length >= 8) {
        return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4)
    }
    else
    return (' ')
}


// return str.replace(str.slice(0, 4), str.slice(-4)) 
console.log(swap4('OmarandTech'))



/*
Write a function named as swapFirstLastWord() which takes a string word as an argument and 
returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.
*/

console.log('\n --------TASK10---------\n');

function swapFirstLastWord(str) {
   let str3 = str.split(' ')
//    console.log(str3.slice(-1))
//    console.log(str3.slice(1, str3.length - 1))
//    console.log(str3.slice(0, 1))
   if (str3.length < 2) {
    return (' ')
   }
   else {
    return `${str3.slice(-1)} ${str3.slice(1, -1)} ${str3.slice(0, 1)}`
   }
}


console.log(swapFirstLastWord('Tech and Global'))












// const { CharacterHelper } = require('./../utils/CharacterHelper.js');