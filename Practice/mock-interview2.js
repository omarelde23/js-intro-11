console.log('\n --------TASK01---------\n');

/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled
if the string length is odd
*/

function doubleOrTripleWord(str) {
    return str + str + str
}

console.log(doubleOrTripleWord('Tech'))
console.log(doubleOrTripleWord('apple'))


console.log('\n --------TASK02---------\n');

/*
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
*/

function firstlastWord(str) {
    let splitted = str.split(' ')
    return splitted[0] + splitted[splitted.length - 1]
}

console.log(firstlastWord('I like java'))
console.log(firstlastWord('Hello'))


console.log('\n --------TASK03---------\n');

/*
Has Vowel
")
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

function hasVowel(str) {
    return /[aeoui]/i.test(str)
}

console.log(hasVowel("Javascript")) // true 
console.log(hasVowel("ABC")) // true 
console.log(hasVowel("1234")) // false
console.log(hasVowel("Tech Global")) // true 
console.log(hasVowel("")) // false 


console.log('\n --------TASK04---------\n');

/*
Write a function named as startVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

function startVowel(str) {
   return /^[aeoui]/i.test(str)
}

console.log(startVowel("Hello")) // false 
console.log(startVowel("Apple")) // true
console.log(startVowel("orange")) // true 
console.log(startVowel('123')) // false
console.log(startVowel('   ')) // false


console.log('\n --------TASK05---------\n');

/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers
*/

function averageOfEdges(num1, num2, num3) {
    return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
}

console.log(averageOfEdges(-2, -2, 10)) // 4
console.log(averageOfEdges(-3, 15, -3)) // 6
console.log(averageOfEdges(10, 13, 20)) // 15


console.log('\n --------TASK06---------\n');

/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

function replaceFirstLast(str) {
    let trimmed = str.trim()
    if(trimmed.length < 2) return ''
    return trimmed.slice(-1) + trimmed.slice(1, -1) + trimmed[0]
}

console.log(replaceFirstLast("Hello")) // oellH
console.log(replaceFirstLast("Tech Global")) // "lech GlobaT"
console.log(replaceFirstLast("A")) // ''
console.log(replaceFirstLast("     A      ")) // ''


console.log('\n --------TASK07---------\n');

/*
Write a function named as swap4() which takes a string word as an argument and returns 
the string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
*/

function swap4(str) {
    let trimmedString = str.trim()
    if(trimmedString.length < 8) return ''
    return trimmedString.slice(-4) + trimmedString.slice(4, -4) + trimmedString.slice(0, 4)
}

console.log(swap4("JavaScript")) //"riptScJava"
console.log(swap4("TechGlobal")) //  "obalGlTech"
console.log(swap4("abc")) // ''


console.log('\n --------TASK08---------\n');

/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and 
returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
*/

function swapFirstLastWord(str) {
    let myTrimmedString = str.trim()
    let splittedString = myTrimmedString.split(' ')
    if(splittedString.length < 2) return ''
    let temporary = splittedString[0] 
    splittedString[0] = splittedString[splittedString.length - 1]
    splittedString[splittedString.length - 1] = temporary

    return splittedString.join(' ')
}

console.log(swapFirstLastWord("Hello World")) // 'World Hello'
console.log(swapFirstLastWord("I like JavaScript")) // "JavaScript like I"


console.log('\n --------TASK09---------\n');

/*
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.
*/


function countPos(arr) {
    let theCounter = 0
    for(const num of arr) {
        if(num > 0) theCounter++
    }
    return theCounter
}

console.log(countPos([-45, 0, 0, 34, 5, 67])) // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])) // 4


console.log('\n --------TASK10---------\n');

/*
Write a function named as getEvens() which takes 2 number arguments and 
returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array 
if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/

function getEvens(num1, num2) {
    const newArray = []
    for(let i = Math.min(num1, num2); i < Math.max(num1, num2); i++) {
        if(i % 2 === 0) newArray.push(i)
    }
return newArray
}

console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(3, 3)) 


console.log('\n --------TASK11---------\n');

/*
Find Numbers Divisible By 5
Write a function named as getMultipleOf5() which takes 2 number arguments and 
returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and 
return empty array if there are no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/

function getMultipleOf5(num1, num2) {
    const newArr = []
    for(let i = Math.min(num1, num2); i < Math.max(num1, num2); i++) {
        if(i % 5 === 0) newArr.push(i)
    }
return newArr
}

console.log(getMultipleOf5(3, 17)) 
console.log(getMultipleOf5(23, 5))



console.log('\n --------TASK12---------\n');

/*
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument
and returns how many elements are negative when invoked.
*/

function countNeg(arr) {
    let counter = 0
    for(const num of arr) {
        if(num < 0) counter++
    }
    return counter
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]))
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]))


console.log('\n --------TASK12---------\n');

/*
Count A

Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity.
*/

function countA(str) {
    let acount = 0
    let splitString = str.split('').ToLowerCase()
    for(const ele of splitString) {
        if(ele === 'a') acount++
    }
    return acount
}

console.log(countA("TechGlobal is a QA bootcamp")) // 4



console.log('\n --------TASK13---------\n');

/*
Write a function named countWords() which takes a string argument and 
returns the total count of words in the given string when invoked.
*/

function countWords(str) {
    let trimmed = str.trim().split(' ')
    return trimmed.length
}

console.log(countWords(" Javascript is fun ")) // 3
console.log(countWords("Cypress is an UI automation tool. ")) // 6
console.log(countWords("1 2 3 4")) // 4


console.log('\n --------TASK14---------\n');

/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
*/

function factorial(num) {
    let factorial = 1
    for(let i = num; i > 0; i--) {
    factorial *= i
    }
return factorial
}

console.log(factorial(5)) // 120
console.log(factorial(4)) // 24
console.log(factorial(1)) // 1
console.log(factorial(0)) // 1


console.log('\n --------TASK15---------\n');

/*
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked
*/

function count3OrLess(str) {
    if(str.trim() === '') return 0
    let count = 0
    let splitStr = str.split(' ')
    for(let i = 0; i < splitStr.length; i++) {
        if(splitStr[i].length <= 3) count++
    }
    return count
}

console.log(count3OrLess("JavaScript is fun")) // ->2)
console.log(count3OrLess("My name is John Doe")) // ->3)
console.log(count3OrLess("Hello")) // ->0)
console.log(count3OrLess(''))


console.log('\n --------TASK16---------\n');

/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/

function removeExtraSpaces(str) {
    return str.trim().replace(/\s+/g, ' ')
}

console.log(removeExtraSpaces('       JavaScript     is fun'))
console.log(removeExtraSpaces("Hello")) 



console.log('\n --------TASK17---------\n');

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle number.
*/

function middleInt(num1, num2, num3) {
    const numbersArray = []
    numbersArray.push(num1, num2, num3)
    numbersArray.sort((a, b) => a - b)
    return numbersArray[1]
}

console.log(middleInt(-1, 25, 10)) // 10
console.log(middleInt(5, 3, 5)) // 5
console.log(middleInt(3, 15, 37)) // 15



console.log('\n --------TASK18---------\n');

/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and 
returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.
*/

function firstDuplicate(arr) {
    
}