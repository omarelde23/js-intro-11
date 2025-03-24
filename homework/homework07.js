console.log('\n --------TASK01---------\n');

/*
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
*/

function hasUpperCase(str) {
   return (/[A-Z]/).test(str)
}

console.log(hasUpperCase("javascript")) // 	-> false
console.log(hasUpperCase("John")) //	-> true


console.log('\n --------TASK02---------\n');

/*
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.

*/

function noDigit(str) {
    return str.replace(/[0-9]/g, '')
}

console.log(noDigit("Javascript")) // 		-> "Javascript"
console.log(noDigit("123Hello")) //		-> "Hello"



console.log('\n --------TASK03---------\n');

/*
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.
*/

function noVowel(str) {
    return str.replace(/[aeouiAEOUI]/g, '')
}

console.log(noVowel("TechGlobal")) // 	-> "TchGlbl"
console.log(noVowel("AEOxyz")) // 	-> "xyz"



console.log('\n --------TASK04---------\n');

/*
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​
*/

function no13(arr) {
    const newArray = []
    for(const num of arr) {
        if(num === 13) newArray.push(0)
            else newArray.push(num)
    }
return newArray
}

console.log(no13([13, 2, 3])) //		-> [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])) // 	-> [0, 0, 0, 0, 0])
console.log(no13([1, 2, 3 ,4])) 	//	-> [1, 2, 3 ,4] 



console.log('\n --------TASK05---------\n');

/*
Write a function named middleInt() which takes three number arguments and return the middle number. ​
*/

function middleInt(num1, num2, num3) {
    const newArr = []
    newArr.push(num1, num2, num3)
    newArr.sort((a, b) => a - b)
    return newArr[1]
}

console.log(middleInt(11, 30, 200)) //-> 30)
console.log(middleInt(1, 2, 2)) // 	-> 2
console.log(middleInt(5, 5, 8)) //	-> 5
console.log(middleInt(5, 3, 5)) // 	-> 5



console.log('\n --------TASK06---------\n');

/*
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string. ​
*/

function sumOfDigits(str) {
    let sum = 0
    for(const char of str) {
        if(!isNaN(char) && char !== '') {
            sum += Number(char)
        }
    }
    return sum
}

console.log(sumOfDigits("Javascript")) //	-> 0
console.log(sumOfDigits("John’s age is 29")) // 	-> 11
console.log(sumOfDigits("$125.0")) // 		-> 8
console.log(sumOfDigits("")) // 		-> 0



console.log('\n --------TASK07---------\n');

/*
Write a function named arrFactorial() which takes an array of numbers as argument and 
return the array with every number replaced with their factorials.
*/

function arrFactorial(arr) {
    const factorial = arr.map(x => {
        let prod = 1
        for(let i = x; i > 1; i--) {
            prod *= i
        }
        return prod
    }) 
    return factorial
}

console.log(arrFactorial([0, 5])) // 		-> [1,120]
console.log(arrFactorial([5 , 0, 6])) // 		-> [120, 1, 720]



console.log('\n --------TASK08---------\n');

/*
Write a function named categorizeCharacters() which takes a string word as argument and 
return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
*/

function categorizeCharacters(str) {
    let letters = ''
    let digits = ''
    let specials = ''

    for(const i of str) {
        if(i === ' ') continue 
        else if (/[a-z]/i.test(i)) letters += i
        else if (/[0-9]/.test(i)) digits += i
        else specials += i
    }
    return [letters, digits, specials]
}

console.log(categorizeCharacters("abc123$#%")) // 	-> [ 'abc', '123', '$#%' ]

