console.log('\n --------TASK01---------\n');

/*
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
*/

function noSpace(str) {
    return str.trim(' ')
}

console.log(noSpace("    Hello   ")) // -> "Hello"
console.log(noSpace(" Hello World   ")) // 	-> "HelloWorld”


console.log('\n --------TASK02---------\n');

/*
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.

*/

function replaceFirstLast(str) {
    let trimmed = str.trim()
    if(trimmed.length < 2) return ''
    return trimmed.slice(-1) + trimmed.slice(1 , -1) + trimmed[0]
}

console.log(replaceFirstLast("Hello")) //		->  "oellH"
console.log(replaceFirstLast("Tech Global")) // 	-> "lech GlobaT"
console.log(replaceFirstLast("A")) // 		-> ""
console.log(replaceFirstLast("    A      ") ) //	-> "")


console.log('\n --------TASK03---------\n'); 

/*
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

*/

const hasVowel = str => /[aeoui]/i.test(str)

console.log(hasVowel("Javascript")) // 	-> true
console.log(hasVowel("1234")) 	//	-> false
console.log(hasVowel("ABC"))  // true
console.log(hasVowel('')) // false 


console.log('\n --------TASK04---------\n'); 

/*
Write a function named checkAge() which takes a number argument 
to be considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/

function checkAge(num) {
    const year = new Date().getFullYear()
    if((year - num) < 0 || (year - num) > 120) return 'AGE IS NOT VALID'
    else if((year - num) >= 16) return 'AGE IS ALLOWED'
    else if((year - num) < 16 ) return 'AGE IS NOT ALLOWED'
}

console.log(checkAge(2015)) //-> "AGE IS NOT ALLOWED"
console.log(checkAge(2007)) // -> "AGE IS ALLOWED"
console.log(checkAge(2050)) // -> "AGE IS NOT VALID"
console.log(checkAge(1920)) //  -> "AGE IS ALLOWED"
console.log(checkAge(1800)) // -> "AGE IS NOT VALID")


console.log('\n --------TASK05---------\n'); 

/*
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.

*/

function averageOfEdges(num1, num2, num3) {
    let max = Math.max(num1, num2, num3)
    let min = Math.min(num1, num2, num3)
    return (max + min) / 2
}

console.log(averageOfEdges(-2, -2, 10)) //	-> 4
console.log(averageOfEdges(-3, 15, -3)) //	-> 6
console.log(averageOfEdges(10, 13, 20)) // 	-> 15


console.log('\n --------TASK06---------\n'); 

/*
Write a function named noA() which takes an array of strings as argument and
 will return a new array with all elements starting with "A" or "a" replaced with "###".

*/

function noA(arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].startsWith('A') || arr[i].startsWith('a')) newArr.push('###')
            else newArr.push(arr[i])
    }
    return newArr
}

console.log(noA(["apple", "123", "ABC", "javascript"])) //	->  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])) //	-> ["###", "###", "###", "###", "###"]
console.log(noA(["javascript", "hello", "123", "xyz"])) // 	->  ["javascript", "hello", "123", "xyz"]


console.log('\n --------TASK07---------\n'); 

/*
Write a function named no3and5() which takes an array of integer numbers as argument and 
will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
*/


function no3and5(arr) {
    const newArray = []
    for(const num of arr) {
        if(num % 5 === 0 && num % 3 === 0) newArray.push(101)
            else if(num % 5 === 0) newArray.push(99)
        else if(num % 3 === 0) newArray.push(100) 
    else newArray.push(num)
    }
    return newArray
}

console.log(no3and5([3, 4, 5, 6])) //		-> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])) // 	-> [99, 11, 100, 13, 14, 101]
console.log(no3and5([7, 4, 11, 23, 17])) // 	-> [7, 4, 11, 23, 17]


console.log('\n --------TASK08---------\n'); 

/*
Write a function named countPrimes() which takes an array of integer numbers as argument and 
will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.

*/

function countPrimes(arr) {
    let counter = 0
    for(const num of arr) {
       if(num < 2 || num % 2 ===0) continue
       
       for(let i = 3; i < num - 1; i++) {
        if(num % i === 0) continue
       }
       counter++
    }
    return counter
}

console.log(countPrimes([7, 4, 11, 23, 17])) //	-> 4
console.log(countPrimes([41, 53, 19, 47, 67])) // 	-> 5
console.log(countPrimes([-10, -3, 0, 1])) // 	-> 0



console.log('\n --------TASK09---------\n'); 

/*
Write a function named removeDuplicates() which takes an array argument and 
returns a new array with all the duplicates removed.

*/

function removeDuplicates(arr) {
    const resultArr = []
    for(const ele of arr) {
        if(!resultArr.includes(ele)) {
            resultArr.push(ele)
        }
    }
    return resultArr
    }

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])) //	-> [10, 20, 35, 60, 70]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])) //		-> ["1", "2", "3"])



console.log('\n --------TASK10---------\n'); 

/*
Write a method named isDateFormatValid() that takes a string as an argument and 
returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
*/

function isDateFormatValid(str) {
    let trimmedStr = str.trim()
    let splitted = trimmedStr.split('/')
    if(splitted.length !== 3) return false
    if(splitted[0] > 12 || splitted[0] < 1) return false
    if(splitted[0].length !== 2 || splitted[1].length !== 2 || splitted[2].length !== 4) return false
    
    return true
}

console.log(isDateFormatValid("15/30/2020")) //		-> false
console.log(isDateFormatValid("10/02/2020")) // 		-> true
console.log(isDateFormatValid("5/30/2020")) //		-> false
console.log(isDateFormatValid("05/30/2020 ")) // 		-> true
console.log(isDateFormatValid("10/2/2020")) // 		-> false
console.log(isDateFormatValid("10/02/2020 ")) //		-> true





console.log('\n --------TASK11---------\n'); 

/*
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

*/


function secondMax(arr) {
    if(arr.length === 1) return arr[0]
    let noDuplicates = [...new Set(arr)]
    let sorted = noDuplicates.sort((a, b) => a - b)
    return sorted[sorted.length - 2]
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])) // 	-> 7
console.log(secondMax([3, 4, 5, 6])) // 		-> 5
console.log(secondMax([10])) //		-> 10



console.log('\n --------TASK12---------\n'); 

/*
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

*/


function secondMin(arr) {
    if(arr.length === 1) return arr[0]
    let zeroDuplicates = [...new Set(arr)]
    let sortedArr = zeroDuplicates.sort((a, b) => b - a)
    return sortedArr[sortedArr.length - 2]
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23])) // 	-> 7
console.log(secondMin([3, 4, 5, 6])) //		-> 4
console.log(secondMin([10])) //		-> 10



console.log('\n --------TASK13---------\n'); 

/*
Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

*/

function mostRepeated(arr) {
    let countMap = {}
    let maxCount = 0;
    let mostRepeatedElement = arr[0]

    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;

        if (countMap[num] > maxCount) {
            maxCount = countMap[num];
            mostRepeatedElement = num;
        }
    }

    return mostRepeatedElement;
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])) // 			-> 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])) // 	-> "pen"
