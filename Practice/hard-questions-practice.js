/*
Write a function named as startsVowel() which takes a string word as an argument 
and returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
*/

function startsVowel(str) {
    return /^[aeoui]/i.test(str)
}

console.log(startsVowel('Omar'))


/*
Write a function named as longer() which takes two string words as arguments and 
returns the string that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
*/

function longer(str1, str2) {
    let result = str1.length >= str2.length ? str1 : str2
    return result
}

console.log(longer('ch', 'mar'))


/*
Write a function named as hasFive() which takes a string word as an argument and 
returns true if given string has at least 5 characters, and false otherwise when invoked.
*/

function hasFive(str) {
    return str.length >= 5
}

console.log(hasFive('tech'))


/*
Write a function named as middle() which takes a string word as an argument and 
returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
*/

function middle(str) {
    if (!str) {
        return ''
    }
    else {
    let result1 = str.length % 2 !== 0 ? str[Math.floor(str.length / 2)] : str[(str.length / 2) - 1] + str[str.length / 2]
    
    return result1
    }
}

console.log(middle(''))




/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter
*/


let num = 5
if (num >= 0 && num <= 100) {
    
    if (num >= 0 && num <= 25) {
    console.log(`${num} is in the 1st quarter`)
    console.log(`${num} is in the 1st half`)
}
else if (num > 25 && num <= 50) {
    console.log(`${num} is in the 2nd quarter`)
    console.log(`${num} is in the 1st half`)
}
else if (num > 50 && num <= 75) {
    console.log(`${num} is in the 3rd quarter`)
    console.log(`${num} is in the 2nd half`)
}
}
else
    console.log(`${num} is in the 4th quarter`)
    console.log(`${num} is in the 2nd half`)


/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false
*/

    let num1 = 5
    let num2 = 4
    let num3 = 3

 

    console.log((num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 ===0))