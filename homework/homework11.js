console.log('\n--------TASK1--------\n');

/*
Write a function named countPalindrome() which takes a string and 
returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. 
Example: level, radar, deed, refer.
*/

function countPalindrome(str) {
    let counter = 0
    let splitString = str.split(' ')
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] === splitString[i].split('').reverse().join()) counter++
    }
    return counter
}

console.log(countPalindrome("Mom and Dad")) //		-> 2
