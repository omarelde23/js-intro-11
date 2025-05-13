console.log('\n--------TASK1--------\n');

/*
Write a function named makeNegative() that takes a number and returns its 
negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no 
mathematical sense. So, zero will stay as zero.
Examples
makeNegative(10)       -> -10
makeNegative( -7)      -> -7
makeNegative( 0)        -> 0
*/


makeNegative = num => num <= 0 ? num : -num

console.log(makeNegative(10)) // -10
console.log(makeNegative( -7)) // -7
console.log(makeNegative( 0)) // 0
console.log(makeNegative(0.45)) //  -> -0.45)



console.log('\n--------TASK2--------\n');

/*
Write a function isSumEvenOrOdd() which takes three numbers as 
arguments and determines if the sum of these numbers is odd or even
*/

function isSumEvenOrOdd(num1, num2, num3) {
    let evenResult = 'even'
    let oddResult = 'odd'
    if((num1 + num2 + num3) % 2 === 0) return evenResult
    return oddResult
}

console.log(isSumEvenOrOdd(0, 1, 4))  // odd
console.log(isSumEvenOrOdd(0, -1, -5)) // even
console.log(isSumEvenOrOdd(0, 0, 0) ) // even
console.log(isSumEvenOrOdd(7, 1, 9)) // odd
console.log(isSumEvenOrOdd(1, 1, 1)) // odd



console.log('\n--------TASK3--------\n');

/*
Write a function named decimal2() which takes an array of numbers as an 
argument and returns the array with the same numbers rounded up or down and 
represented with only two decimals.
*/

function decimal2(arr) {
    const newArr = []
    for(const num of arr) {
        newArr.push(num.toFixed(2))
    }
    return newArr
}

console.log(decimal2([76.62, 128.4, 84]))
console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))  //-> [ 20987, 3.53, 12.35, 32.90 
console.log(decimal2([4.35623, 8.9742]))


console.log('\n--------TASK4--------\n');


/*
Write a function named myPow() which takes two numbers, x and n, as its 
arguments and returns x to the power of n without using Math.pow(). 3 to the 
power of 3 is 3*3*3 = 27.
*/

myPow = (x, n) => x ** n

console.log(myPow(3, 3)) // 27
console.log(myPow(10, 1)) // 10
console.log(myPow(100, 0)) // 1
console.log(myPow(4, 2)) //16
console.log(myPow(5, 3)) //125
console.log(myPow(1, 1)) // 1



console.log('\n--------TASK5--------\n');

/*
Write a function named findLongestWord() which takes a string as input and 
returns the longest word in the string
*/

function findLongestWord(str) {
    let trimmed = str.trim()
    if(trimmed === '') return ''
    let splitStr = trimmed.split(/\s+/)
    let longest = splitStr[0]
    for(const ele of splitStr) {
        if(ele.length > longest.length) longest = ele
    }
return longest
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))  // jumped
console.log(findLongestWord('This is a sample string for testing'))  // testing
console.log(findLongestWord("      ")) // ''
console.log(findLongestWord('One two ten')) // One