console.log('\n --------TASK01---------\n');

/*
Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if the string length is even or doubled
if the string length is odd
*/

function doubleOrTripleWord(str) {
    if(str.length % 2 === 0) return str + str + str
    else if(str.length % 2 !== 0) return str + str
}

console.log(doubleOrTripleWord("Tech"))
console.log(doubleOrTripleWord("Apple"))



console.log('\n --------TASK02---------\n');

/*
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
*/

function firstlastWord(str) {
    let strSplit = str.split(' ')
    return strSplit[0] + strSplit[strSplit.length - 1] 
}

console.log(firstlastWord("I like JavaScript"))
console.log(firstlastWord(''))
console.log(firstlastWord('       '))



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


console.log('\n --------TASK04---------\n');

/*
Write a function named as startVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

function startVowel(str) {
    return /^[aeoui]/i.test(str)
}

console.log(startVowel("Hello"))
console.log(startVowel("Apple"))




console.log('\n --------TASK05---------\n');

/*
Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers
*/


function averageOfEdges(num1, num2, num3) {
    return (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
}

console.log(averageOfEdges(-2, -2, 10))  // 4
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

console.log(replaceFirstLast("Hello"))
console.log(replaceFirstLast("Tech Global"))
console.log(replaceFirstLast(" A "))



console.log('\n --------TASK07---------\n');

/*
Write a function named as swap4() which takes a string word as an argument and returns 
the string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
*/

function swap4(str) {
    let trimmedString = str.trim()
    if(trimmedString.length <= 7) return ''
    return trimmedString.slice(-4) + trimmedString.slice(4, -4) + trimmedString.slice(0, 4)
}

console.log(swap4("JavaScript"))
console.log(swap4("TechGlobal"))
console.log(swap4("Apple"))



console.log('\n --------TASK08---------\n');

/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and 
returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
*/

function swapFirstLastWord(str) {
    let trimmedSwap = str.trim().split(/\s+/)
    if(trimmedSwap.length <= 1) return ''
    let temporary = trimmedSwap[0]
    trimmedSwap[0] = trimmedSwap[trimmedSwap.length - 1]
    trimmedSwap[trimmedSwap.length - 1] = temporary
    return trimmedSwap.join(' ')
}

console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord("  "))



console.log('\n --------TASK09---------\n');

/*
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.
*/

function countPos(arr) {
    let counter = 0
    for(const num of arr) {
        if(num > 0) counter++
    }
    return counter
}

console.log(countPos([-45, 0, 0, 34, 5, 67])) // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])) // 4



console.log('\n --------TASK10---------\n');

/*
Write a function named as getEvens() which takes 2 number arguments and 
returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and 
return empty array if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
*/

function getEvens(num1, num2) {
    const evensArr = []
    for(let i = Math.min(num1, num2); i < Math.max(num1, num2); i++) {
        if(i % 2 === 0) evensArr.push(i)
    }
    return evensArr
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
    const divisibleArr = []
    if(num1 <= num2) {
        for(let i = num1; i <= num2; i++) {
            if(i % 5 === 0) divisibleArr.push(i)
        }
    }
    else {
        for(let i = num1; i >= num2; i--) {
            if(i % 5 === 0) divisibleArr.push(i)
        }
    }
    return divisibleArr
}


console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))



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
console.log(countNeg([0, -1, -2, -3]))


console.log('\n --------TASK13---------\n');

/*
Count A

Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity.
*/

function countA(str) {
    let counter = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'A') counter++
    }
    return counter
}

console.log(countA("TechGlobal is a QA bootcamp"))
console.log(countA("QA stands for Quality Assurance"))
console.log(countA("Cypress"))


console.log('\n --------TASK13---------\n');

/*
Write a function named countWords() which takes a string argument and 
returns the total count of words in the given string when invoked.
*/

function countWords(str) {
    let splitStr = str.trim().split(/\s+/)
    return splitStr.length
}

console.log(countWords(" Javascript is fun "))
console.log(countWords("Cypress is an UI automation tool. "))
console.log(countWords("1 2 3 4"))


console.log('\n --------TASK14---------\n');

/*
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
*/

function factorial(num) {
    let fact = 1
    for(let i = num; i >= 1; i--) {
        fact *= i
    }
    return fact
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))




console.log('\n --------TASK15---------\n');

/*
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked
*/

function count3OrLess(str) {
    let counter = 0
    let splitStr = str.split(' ')
    for(let i = 0; i < splitStr.length; i++) {
        if(splitStr[i].length <= 3) counter++
    }
    return counter
}

console.log(count3OrLess("Hello"))
console.log(count3OrLess("Hi John"))
console.log(count3OrLess("JavaScript is fun"))
console.log(count3OrLess("My name is John Doe"))
console.log(count3OrLess(""))


console.log('\n --------TASK16---------\n');

/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/

function removeExtraSpaces(str) {
    return str.trim().split(/\s+/).join(' ')
}

console.log(removeExtraSpaces('     Hello       '))
console.log(removeExtraSpaces('   Java     is    fun   '))
console.log(removeExtraSpaces('Hello'))


console.log('\n --------TASK17---------\n');

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle number.
*/


function middleInt(num1, num2, num3) {
    const intArr = []
    intArr.push(num1, num2, num3)
    intArr.sort((a, b) => a - b)
    return intArr[1]
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
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) return arr[i]
        }
    }
    return -1
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))



console.log('\n --------TASK19---------\n');

/*
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements
 in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array 
if there are no duplicates in the array. For two elements to be considered as duplicated,
 value and data types of the elements must be same.
*/

function getDuplicates(arr) {
    const duplicatesArr = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if((arr[i] === arr[j]) && !duplicatesArr.includes(arr[i])) duplicatesArr.push(arr[i])
        }
    }
    return duplicatesArr
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))



console.log('\n --------TASK20---------\n');

/*
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/

function countVowels(str) {
    let counter = 0
    const vowels = 'aeouiAEOUI'
    for(const ele of str) {
        if(vowels.includes(ele)) counter++
    }
return counter
}

console.log(countVowels("Hello"))
console.log(countVowels("JavaScript is fun"))


console.log('\n --------TASK21---------\n');

/*
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and 
after words in the given string.
*/

function reverseStringWords(str) {
    let trimmed = str.trim().split(/\s+/)
   let resultArr = trimmed.map(word => word.split('').reverse().join(''))
   return resultArr.join(' ')
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))


console.log('\n --------TASK22---------\n');

/*
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
*/

function countConsonants(str) {
    let counter = 0
    const vowels = 'aeouiAEOUI' 
    for(const ele of str) {
        if(!vowels.includes(ele)) counter++
    }
    return counter
}

console.log(countConsonants("Hello"))
console.log(countConsonants("Hello World"))
console.log(countConsonants("JavaScript is fun"))
console.log(countConsonants(""))


console.log('\n --------TASK23---------\n');

/*
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
*/

function countMultipleWords(arr) {
    let counter = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].trim().split(/\s+/).length > 1) counter++
    }
    return counter
}

console.log(countMultipleWords([ "foo", "bar", "foobar", 'foo bar'])) // 1
console.log(countMultipleWords([ "f o o", "      bar    ", "foo bar", 'foo bar']))



console.log('\n --------TASK24---------\n');

/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a 
string from smallest to greatest number with a ' | ' separator for each number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers. Assume you will not be given negative numbers.
*/

function fizzBuzz(num1, num2) {
    let result = []
    for(let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        if(i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz')
            else if(i % 3 === 0) result.push('Fizz')
                else if(i % 5 === 0) result.push('Buzz')
            else result.push(i)
    }
    return result.join(' | ')
}

console.log(fizzBuzz(13, 18))
console.log(fizzBuzz(12, 5))
console.log(fizzBuzz(5, 5))
console.log(fizzBuzz(9, 6))


console.log('\n --------TASK25---------\n');

/*
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
*/

function isPalindrome(str) {
    let lowercaseStr = str.toLowerCase()
    return lowercaseStr === lowercaseStr.split('').reverse().join('')
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Kayak"))
console.log(isPalindrome("123454321"))
console.log(isPalindrome(''))


console.log('\n --------TASK26---------\n');

/*
Write a function named as isPrime() which takes a number as an argument and
returns true if the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/


function isPrime(num) {
    if(num < 2) return false 
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false
    }
    return true
}

console.log(isPrime(20))


console.log('\n --------TASK27---------\n');

/*
Write a function named add() which takes two array of numbers as argument and 
returns a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different
*/


function add(arr1, arr2) {
    const newArr = []
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        newArr.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return newArr
}
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))







console.log('\n --------TASK28---------\n');

/*
Write a function named noA() which takes an array of strings as argument and will
 return a new array with all elements starting with "A" or "a" replaced with "###".
*/


function noA(arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].startsWith('A') || arr[i].startsWith('a')) newArr.push('###')
            else newArr.push(arr[i])
    }
    return newArr
}

console.log(noA(["javascript", "hello", "123", "xyz"]))
console.log(noA(["apple", "123", "ABC", "javascript"]))
console.log(noA(["apple", "abc", "ABC", "Alex", "A"]))



console.log('\n --------TASK29---------\n');

/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return
 a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
*/

function no3and5(arr) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0 && arr[i] % 5 === 0) newArray.push(101)
            else if(arr[i] % 3 === 0) newArray.push(100)
                else if(arr[i] % 5 === 0) newArray.push(99)
            else newArray.push(arr[i])
    }
    return newArray
}

console.log(no3and5([7, 4, 11, 23, 17]))
console.log(no3and5([3, 4, 5, 6]))
console.log(no3and5([10, 11, 12, 13, 14, 15]))



console.log('\n --------TASK30---------\n');

/*
Write a function named no13() which takes an array of numbers as argument and 
return a new array with all 13s replaced with 0s.
*/

function no13(arr) {
    let new13array = []
    for(const num of arr) {
        if(num === 13) new13array.push(0)
            else new13array.push(num)
    }
    return new13array
}

console.log(no13([1, 2, 3 ,4]))
console.log(no13([13, 2, 3]))
console.log(no13([13, 13, 13 , 13, 13]))
console.log(no13([]))



console.log('\n --------TASK31---------\n');

/*
Write a function named removeDuplicates() which takes an array argument and
 returns a new array with all the duplicates removed.
*/

function removeDuplicates(arr) {
    const noDuplicates = []
    for(const ele of arr) {
        if(!noDuplicates.includes(ele)) noDuplicates.push(ele)
    }
return noDuplicates
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))
console.log(removeDuplicates([1, 2, 5, 2, 3]))
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]))


console.log('\n --------TASK32---------\n');

/*
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string
*/

function noDigit(str) {
    return str.replace(/[0-9]/g, '')
}

console.log(noDigit("123Hello"))
console.log(noDigit("123Hello World149"))
console.log(noDigit("123Tech456Global149"))
console.log(noDigit(""))


console.log('\n --------TASK33---------\n');

/*
Write a function named noVowel() which takes a string argument and returns 
a new string with all vowels removed from the original string.
*/

function noVowel(str) {
    return str.replace(/[aeoui]/gi, '')
}

console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))
console.log(noVowel("Javascript"))
console.log(noVowel("125$"))


console.log('\n --------TASK34---------\n');

/*
Write a function named sumOfDigits() which takes a string argument and
returns sum of all digits from the original string.
*/

function sumOfDigits(str) {
    let sum = 0
    for(const ele of str) {
        if(!isNaN(ele) && ele !== '') {
            sum += Number(ele)
        }
    }
    return sum
}


console.log(sumOfDigits("John’s age is 29"))
console.log(sumOfDigits("$125.0"))
console.log(sumOfDigits(""))


console.log('\n --------TASK35---------\n');

/*
Write a function named arrFactorial() which takes an array of numbers as argument and
return the array with every number replaced with their factorials.
*/

function arrFactorial(arr) {
    const factorial = arr.map(num => {
        let product = 1
        for(let i = num; i > 1; i--) {
            product *= i
        }
        return product
    })
    return factorial
}


console.log(arrFactorial([0, 5]))
console.log(arrFactorial([5 , 0, 6]))
console.log(arrFactorial([1, 2, 3 ,4]))






function isPrime(num) {
    if(num < 2) return false
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false
    }
    return true
}

console.log(isPrime(20))
console.log(isPrime(5))
console.log(isPrime(-5))




function noVowel(str) {
    return str.replace(/[aeoui]/ig, '')
}

console.log(noVowel("TechGlobal"))
console.log(noVowel("AEOxyz"))



/*
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
*/

function countMultipleWords(arr) {
    let counter = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].trim().split(/\s+/).length > 1) counter++
    }
    return counter
}

console.log(countMultipleWords(['foo', 'foo bar', 'tech       global', '    omar   kinggg      '])) // 3



/*
Write a function named as reverseStringWords() which takes a string as an argument and
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. 
Make sure you consider extra spaces before and after words in the given string.
*/

function reverseStringWords(str) {
    let trimmed = str.trim().split(/\s+/)
   let result = trimmed.map(ele => ele.split('').reverse().join(''))
return result.join(' ')
}

console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))



/*
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
*/

function countConsonants(str) {
    let counter = 0
    const vowels = 'aeouiAEOUI'
    for(const ele of str) {
        if(!vowels.includes(ele)) counter++
    }
    return counter
}

console.log(countConsonants("Hello"))



/*
Write a function named as isPalindrome() which takes a string word as an argument and
 returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
*/

function isPalindrome(str) {
    let lower = str.toLowerCase()
    return lower === lower.split('').reverse().join('')
}

console.log(isPalindrome("Hello"))
console.log(isPalindrome("Civic"))


/*
Write a function named as isPrime() which takes a number as an argument and 
returns true if the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/


function isPrime(num) {
    if(num < 2) return false
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return fase
    }
    return true
}

console.log(isPrime(5))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(-5))
console.log(isPrime(0))
console.log(isPrime(1))



/*
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different
*/

function add(arr1, arr2) {
    const sumArr = []
    for(let i = 0; i < Math.max(arr1.length,  arr2.length); i++) {
        sumArr.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return sumArr
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))
console.log(add([10,3,6,3,2],[6,8,3,0,0,7,5,10,34]))
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]))



function reverse(str) {
    let trimmed = str.trim().split(/\s+/)
    let result = trimmed.map(ele => ele.split('').reverse().join(''))
    return result.join(' ')
}

console.log(reverse("Hello World"))


function sumOfDigits(str) {
    let sum = 0
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(str[i]) && str[i] !== '') {
            sum += Number(str[i])
        }
    }
    return sum
}

console.log(sumOfDigits("John’s age is 29"))




function arrFactorial(arr) {
    const factorial = arr.map(num => {
        let product = 1
        for(let i = num; i > 1; i--) {
            product *= i
        }
        return product
    })
    return factorial
}

console.log(arrFactorial([1, 2, 3 ,4]))
console.log(arrFactorial([5 , 0, 6]))


function add(arr1, arr2) {
    const newArr = []
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        newArr.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return newArr
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))




function add(arr1, arr2) {
    const newArr = []
    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        newArr.push((arr1[i] || 0) + (arr2[i] || 0))
    }
    return newArr
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))






function isPrime(num) {
    if(num < 2) return false 
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false
    }
    return true
}
console.log(isPrime(29))
console.log(isPrime(10))
console.log(isPrime(25))






function isPalindrome(str) {
    let lower = str.toLowerCase()
    return lower === lower.split('').reverse().join('')
}

console.log(isPalindrome("Kayak"))