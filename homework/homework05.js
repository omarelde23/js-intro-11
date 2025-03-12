console.log('\n --------TASK01---------\n');

/*
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0
*/

const countPos = arr => arr.filter((x) => x > 0).length

console.log(countPos([-45, 0, 0, 34, 5, 67]))
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))
console.log(countPos([0, -1, -2, -3]))



console.log('\n --------TASK02---------\n');

function countA(str) {
    return str.toLowerCase().split('a').length - 1
}

console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))



console.log('\n --------TASK03---------\n');


function countVowels(str) {
    let countVowels = 0;
    for(let i = 0; i < str.length; i++) {
        if('aeouiAEOUI'.includes(str[i])) 
            countVowels++
    }
    
    return countVowels
}

console.log(countVowels("Hello"))
console.log(countVowels("Hello World"))//	-> 3


console.log('\n --------TASK04---------\n');

function countConsonants(str) {
    let countConsonants = 0
    for(let i = 0; i < str.length; i++) {
        if(!'AEOUIaeoui'.includes(str[i])) {
            countConsonants++
        }
    }
    return countConsonants
}

console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))



console.log('\n --------TASK05---------\n');

const countWords = str => str.trim(' ').split(' ').length



console.log(countWords("     Javascript is fun      "))
console.log(countWords("Cypress is an UI automation tool.    "))




console.log('\n --------TASK06---------\n');

const factorial = num => {
    let product = 1
    for(let i = num; i > 0; i--) 
        product *= i
    return product
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))



console.log('\n --------TASK07---------\n');

function isPalindrome(str) {
  let reversed = str.toLowerCase().split('').reverse().join('');
  return reversed === str.toLowerCase()
}

console.log(isPalindrome("Hello")) 		//-> false
console.log(isPalindrome("Kayak")) 		// -> true 
console.log(isPalindrome("civic") ) // true 
console.log(isPalindrome("123454321"))  // true 



console.log('\n --------TASK08---------\n');

const countMultipleWords = arr => {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].trim(' ').split(' ').length > 1) count++
    }
return count
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]))  // 1
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ])) // 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])) //  	-> 4
console.log(countMultipleWords([ ]))  // 0



console.log('\n --------TASK09---------\n');

const count3OrLess = str => str.split(' ').filter((str) => str.trim(' ').length <= 3).length

console.log(count3OrLess("")) 	// -> 0
console.log(count3OrLess("Hello"))   //	-> 0
console.log(count3OrLess("Hi John")) //	-> 1
console.log(count3OrLess("JavaScript is fun")) //-> 2
console.log(count3OrLess("My name is John Doe") ) // 3



console.log('\n --------TASK10---------\n');

// const isPrime = num => num % num === 0 && num / 1 === num && num >= 2

function isPrime(num) {
    if(num % /\d/ === 0 && num !== 2 && num !== num) return false 
    if(num % num === 0 && num / 1 === num && num >= 2) return true
    else return false 
}

console.log(isPrime(20)) // false 
console.log(isPrime(2)) // -> true
console.log(isPrime(29)) //  -> true
console.log(isPrime(-5)) // -> false
console.log(isPrime(0)) // 	-> false


console.log('\n --------TASK11---------\n');

function add(arr1, arr2) {
    const emptyArray = []
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        emptyArray.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return emptyArray
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) )
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))



console.log('\n --------TASK12---------\n');

function removeExtraSpaces(str) {
  return str.trim().split(/\s+/).join(' ')
}

console.log(removeExtraSpaces("      Hello    World     ")) 	// -> "Hello World"
console.log(removeExtraSpaces("     JavaScript is          fun"))	// -> "JavaScript is fun”
console.log(removeExtraSpaces(''))


console.log('\n --------TASK13---------\n');

function findClosestTo10(arr) {
    let currentCloset = Infinity
    for(let i = 0; i < arr.length; i++) {
       if(arr[i] === 10) continue
        if(Math.abs(arr[i] - 10) < Math.abs(currentCloset - 10)) currentCloset = arr[i]
    }
    return currentCloset
}

console.log(findClosestTo10([3, -13, 5, 70, 15, 57])) // -> 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])) //	-> 8
console.log(findClosestTo10([0, -1, -2])) //		-> 0



console.log('\n --------TASK14---------\n');

/*
Write a function named as isEmailValid() which takes a string email as an argument and 
returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

*/

function isEmailValid(str) {
    if(str.includes(' ')) return false
     let arr = str.split(/[@.]/);
     if(arr.length > 3) return false
     else if(arr[0].length < 2 || arr[1].length < 2 || arr[2].length < 2) return false
     return true
    
}

console.log(isEmailValid("omar@gmail.com")) 



console.log('\n --------TASK15---------\n');

/*
Write a function named as isPasswordValid() which takes a string email as an argument
and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.
*/


function isPasswordValid(str) {
    if(str.includes(' ') || str.length < 8 || str.length > 16) return false
    if((/[a-z]/).test(str) && (/[A-Z]/).test(str) && (/\d/).test(str) && (/[!"#$%&'()*+,-./:;<=>?@``,^,_,,,|,]/).test(str)) return true
    else return false
}

console.log(isPasswordValid("Abcd1234$"))  // -> true
console.log(isPasswordValid("abcd1234") )  // false 
console.log(isPasswordValid("Chicago12345US!#$%") )  // false 
console.log(isPasswordValid("Chicago123$") )  // true
console.log(isPasswordValid("ab cd") )  // false 