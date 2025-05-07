console.log('\n--------TASK1--------\n');

/*
Write a function named countPalindrome() which takes a string and 
returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. 
Example: level, radar, deed, refer.
*/

function countPalindrome(str) {
    let counter = 0
    let splitString = str.toLowerCase().split(' ')
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] === splitString[i].split('').reverse().join('')) counter++
    }
    return counter
}

console.log(countPalindrome("Mom and Dad")) //		-> 2
console.log(countPalindrome("See you at noon")) //			-> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")) // 	-> 2
console.log(countPalindrome("No palindrome here"))  // 0
console.log(countPalindrome(""))  // 0



console.log('\n--------TASK2--------\n');

/*
Write a function named sum() which takes an array of numbers and a boolean value as arguments.
It will return the sum of the numbers positioned at even indexes if true. 
And, return sum of numbers positioned at odd indexes if false.
*/

function sum(arr, bool) {
    let sum = 0
    if(bool === true) {
        for(let i = 0; i < arr.length; i++) {
            if(i % 2 === 0) sum += arr[i]
        }
    }
    else {
        for(let i = 0; i < arr.length; i++) {
            if(i % 2 !== 0) sum += arr[i]
        }
    }
    return sum
}

console.log(sum([1, 5, 10], true)) //		-> 11
console.log(sum([3, 7, 2, 5, 10], false)) //	-> 12
console.log(sum([-1, 1, -2, 2], true)) //	-> -3
console.log(sum([0, -1, 15, 1], false)) //		-> 0
console.log(sum([1, 2, 3, 4, -4], true)) //		-> 0)



console.log('\n--------TASK3--------\n');

/*
Write a function named nthChars() which takes a string and a number as arguments and 
returns the string back with every nth characters.​
*/

function nthChars(str, num) {
    let result = ''
    for(let i = num - 1; i < str.length; i += num) {
        result += str[i]
    }
    return result
    }


console.log(nthChars("Java", 2)) //		-> "aa"
console.log(nthChars("JavaScript", 5)) // 	-> "St"
console.log(nthChars("Java", 3)) //	-> "v"
console.log(nthChars("Hi", 4)) //		-> ""
console.log(nthChars("0123456789", 2)) // 	-> "13579" )



console.log('\n--------TASK4--------\n');

/*
Write a function named canFormString() which takes two string arguments and
returns true if the second string can be formed by rearranging the characters of first string.
 Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
*/

function canFormString(s1, s2) {
    const dictionary = {}
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase().replace(/\s+/g, '')
    
    for(let i of s1) {
        if(i in dictionary) dictionary[i] += 1
        else dictionary[i] = 1
    }

    for(let i of s2) {
        if(dictionary[i] <= 0) return false
        else if(i in dictionary) dictionary[i] -= 1
        else return false
    }
    return true
}

console.log(canFormString("Hello", "Hi")) //		-> false
console.log(canFormString("programming", "gaming")) //		-> true
console.log(canFormString("CONVERSATION", "voices rant on")) //	-> true
console.log(canFormString("12", "123")) // 	-> false



console.log('\n--------TASK5--------\n');

/*
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
In the context of strings, checking if two strings are anagrams of each other means verifying 
if they contain the same characters in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
*/


function isAnagram(s1, s2) {
    const dictionary = {}
    s1 = s1.toLowerCase().trim().replace(/\s+/g, '')
    s2 = s2.toLowerCase().trim().replace(/\s+/g, '')

    if(s1.length !== s2.length) return false
    for(let i in s1) {
        if(i in dictionary) dictionary[i] += 1
        else dictionary[i] = 1
    } 

    for(let i in s2) {
        if(dictionary[i] <= 0) return false
        else if(i in dictionary) dictionary[i] -= 1
        else return false
    }
    return true 
}

console.log(isAnagram("listen", "silent"))// -> true
console.log(isAnagram("astronomer", "moon starer")) // 	-> true
console.log(isAnagram("CINEMA", "iceman")) //		-> true
console.log(isAnagram("123", "1234")) //	-> false)




console.log('\n--------TASK6--------\n');


/*
Write a function named count() which takes an array of numbers and a boolean value as arguments.
 It will return the total count of the even numbers if the boolean value is true. 
 And return the total count of the odd numbers if the boolean value is false. 
*/


function count(arr, bool) {
    let counter = 0
    if(bool === true) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) counter++
        }
    }
    else
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 !== 0) counter++
    }
    return counter
}

console.log(count([1, 5, 10], true)) //		-> 1
console.log(count([3, 7, 2, 5, 10], false)) //	-> 3
console.log(count([-1, 1, -2, 2], true)) //		-> 2
console.log(count([0, -1, 15, 1], false)) //	-> 3
console.log(count([1, 2, 3, 4, -4], true)) //	-> 3



console.log('\n--------TASK7--------\n');

/*
Write a function named sumDigitsDouble() which takes a string and 
returns the sum of the digits in the given String multiplied by 2. 
Return -1 if the given string does not have any digits. Ignore negative numbers.
*/

function sumDigitsDouble(str) {
    let sum = 0
    let foundDigit = false
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i]) && str[i] !== ' ') {
            sum += Number(str[i])
            foundDigit = true
    }
    }
return foundDigit ? sum * 2 : -1
}

console.log(sumDigitsDouble("Javascript")) // 	-> -1
console.log(sumDigitsDouble("23abc45")) //	-> 28
console.log(sumDigitsDouble("Hi-23")) //	-> 10
console.log(sumDigitsDouble("ab12")) //	-> 6
console.log(sumDigitsDouble("n0numh3r3")) // 	-> 12)



/*
PRACTICE PROBLEM
Write a function named countAndDoubleVowels(str) which takes a string as an argument 
and returns twice the number of vowels (a, e, i, o, u) found in the string.

The function should be case-insensitive.
If no vowels are found, return -1.
*/

function countAndDoubleVowels(str) {
    let sum = 0
    let foundVowels = false
    const vowels = 'aeouiAEOUI'
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            sum += 1
            foundVowels = true
        }
    }
return foundVowels ? sum * 2 : -1
}

console.log(countAndDoubleVowels("Hello World")) // 6
console.log(countAndDoubleVowels("AEIOUxyz")) // 10



console.log('\n--------TASK8--------\n');

/*
Write a function named countOccurrence() which takes two string arguments and 
returns how many times that the first string can form the second string.
*/

/*
function countOccurrence(s1, s2) {
    let counter = 0
    s1 = s1.toLowerCase().replace(/\s+/g, '')
    s2 = s2.toLowerCase().replace(/\s+/g, '')

    const dictionary1 = {}
    const dictionary2 = {}

    for(let i in s1) {
        if(i in dictionary) dictionary[i] += 1
        else dictionary[i] = 1
    }

    for(let i in s2) {
        if(i in dictionary) dictionary[i] -= 1
    }
}

console.log(countOccurrence("Javascript", "Java")) //	-> 1

*/

const countOccurrence = (string1, string2) => {
    const dictonary1 = {};
    const dictonary2 = {};
    let count = 0;
    string1 = string1.toLowerCase().replace(/\s+/g, "");
    string2 = string2.toLowerCase().replace(/\s+/g, "");
    for(let i of string1) {
        if (i in dictonary1) dictonary1[i] += 1;
        else if (string2.includes(i)) dictonary1[i] = 1;
    }
    for (let i of string2) {
        if (i in dictonary2) dictonary2[i] += 1;
        else if (!(string1.includes(i))) return 0;
        else dictonary2[i] = 1;
    }
    for(let i in dictonary1) {
        if (i in dictonary2) count = Math.min(dictonary1[i] / dictonary2[i])
        else return 0;
    }
    return count
}
console.log(countOccurrence("Can I can a can", "anc") )  // 3

