// #1

let ran1 = Math.round(Math.random() * (1 - 0)) + 0
let ran2 = Math.round(Math.random() * (1 - 0)) + 0
console.log(`Random numbers are ${ran1}, ${ran2}`)

console.log(ran1 === ran2);


// #2

let char = 5
console.log(`this is a ${typeof(char)}` )

let result 




// #3
/*
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an 
uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1: "a"
Expected result 1:
"a" is a lowercase letter
*/
let char1 = '$'

if (char1.charCodeAt(0) >= 97 && char1.charCodeAt(0) <= 122) {
    console.log(`${char1} is a lowercase letter`)
}
else if (char1.charCodeAt(0) >= 65 && char1.charCodeAt(0) <= 90) {
    console.log(`${char1} is a uppercase`)
}
else {
    console.log(`INVALID INPUT`)
}


// #4
/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.
Special character: except space, letters, digits
*/


let char2 = 'a'

if ((char2.charCodeAt(0) >= 33 && char2.charCodeAt(0) <= 47) || (char2.charCodeAt(0) >= 58 && char2.charCodeAt(0) <= 64) || (char2.charCodeAt(0) >= 91 && char2.charCodeAt(0) <= 96) || (char2.charCodeAt(0) >= 123 && char2.charCodeAt(0) <= 127)) {
    console.log(`${char2} is a special character`)
} 
else {
    console.log(`${char2} is not a special character`)
}



/*
Task05

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1: "a"
Expected result 1:
"a" is a vowel

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N"  is not a vowel

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char5 = 'z';

if (char5.includes('a') || char5.includes('e') || char5.includes('i') || char5.includes('o') || char5.includes('u') || char5.includes('A') || char5.includes('E') || char5.includes('I') || char5.includes('O') || char5.includes('U')) {
    console.log(`${char5} is a vowel`)
}
else {
    console.log(`${char5} is not a vowel`)
}