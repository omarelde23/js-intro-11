console.log('\n--------TASK1--------\n');

/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
*/

function toCamelCase(str) {
    let trimmedStr = str.toLowerCase().trim(/\s+/).split(' ')
    for(let i = 1; i < trimmedStr.length; i++) {
        trimmedStr[i] = trimmedStr[i][0].toUpperCase() + trimmedStr[i].slice(1).toLowerCase()
    }
    return trimmedStr.join('')

}
console.log(toCamelCase("first name")) // firstName
console.log(toCamelCase("   ZIP CODE") ) // zipCode
console.log(toCamelCase('I Learn Java Script'))  // iLearnJavaScript



console.log('\n--------TASK2--------\n');

/*
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase
*/

function toSnakeCase(str) {
    let trimmedStr = str.toLowerCase().trim().split(/\s+/)

    return trimmedStr.join('_')
}

console.log(toSnakeCase("first name")) // ->"first_name")
console.log(toSnakeCase("last    name"))  // last_name
console.log(toSnakeCase("    I love Java Script") )  


console.log('\n--------TASK3--------\n');

/*
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored
*/

function alternatingCases(str) {
    let result = ''
    let fixedIndex = 0
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
        if(/[a-zA-Z]/.test(str[i])) {
            if(fixedIndex % 2 === 0) {
                result += char.toUpperCase()
            }
            else {
                result += char.toLowerCase()
            }
            fixedIndex++
        }
        else {
            result += char
        }
    }
    return result
}

console.log(alternatingCases("Hello")) // HeLlO
console.log(alternatingCases("Tech Global") ) // -> "TeCh GlObAl"
console.log(alternatingCases("123!@#aB") ) // -> "123!@#Ab"


console.log('\n--------TASK4--------\n');

/*
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
*/

function isNeutral(s1, s2) {
    let result = ''
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            result += '0'
        }
        else if(s1[i] === '+' && s2[i] === '+') {
            result += '+'
        }
        else result += '-'
    }
    return result
}

console.log(isNeutral("-", "+"))  // 0
console.log(isNeutral("-+", "-+") )  // -+
console.log(isNeutral("-++-", "-+-+"))  // -+00
console.log(isNeutral("--++--", "++--++"))  // 000000
console.log(isNeutral("+++", "+++"))  // +++


console.log('\n--------TASK5--------\n');

/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
*/

function isTrueOrFalse(str) {
    let firstHalfNumber  = 0
    let secondHalfNumber = 0

    let firstHalf = 'abcdefghijklm'
    let secondHalf = 'nopqrstuvwxyz'

    let splitted = str.toLowerCase().split(' ')
    for(let i = 0; i < splitted.length; i++) {
        if(firstHalf.includes(splitted[i][0])) firstHalfNumber++
        else if(secondHalf.includes(splitted[i][0])) secondHalfNumber++
    }

    return firstHalfNumber > secondHalfNumber
}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit"))  //true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")) // false


