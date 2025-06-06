console.log('\n--------TASK1--------\n');

/*
Write a function named toInitials() which takes a string argument considered 
to be full name and returns initials of the given full name.
NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only.
*/

function toInitials(str) {
    let split = str.split(' ')
    return split[0][0] + ". " + split[1][0] + "."
}


console.log(toInitials( "Joe Doe")) // -> "J. D."
console.log(toInitials( "Alex Reyes"))  // "A. R."
console.log(toInitials( "Tom Cruise") )  // "T. C."


console.log('\n--------TASK2--------\n');

/*
Write a function named hasNumbers() which takes a string argument and 
returns true if there is a number and false if there isn’t.
*/

function hasNumbers(str) {
    return /[0-9]/.test(str)
}

console.log(hasNumbers("John is 34 years old") )  // true
console.log(hasNumbers("Hello 3") )  // true
console.log(hasNumbers("125$") )  // true 
console.log(hasNumbers("   a   ") )  // false 
console.log(hasNumbers("!@#$%^&*()_+") )  // false 



console.log('\n--------TASK3--------\n');

/*
Write a function named elementLength() which takes an array argument and 
returns the length of each element as a separate array.
*/

function elementLength(arr) {
    let newArr = []
    arr.forEach(element => {
        newArr.push(element.length)
    });
    return newArr
}

console.log(elementLength( [ "Hello", "World" ] ) )  // [ 5, 5]
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] ) )  // [ 5, 6, 6, 4 ]
console.log(elementLength( ["BMW", "Mercedes", "Audi" ] ) )  // [3, 8, 4]



console.log('\n--------TASK4--------\n');

/*
Write a function named isArraySumEvenOrOdd() which takes an array of 
numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even
*/

function isArraySumEvenOrOdd(arr) {
    if(arr.length === 0) return 'even'

    let result = arr.reduce((acc, curr) => acc += curr)
    if(result % 2 === 0) return 'even'
    return 'odd'
} 

console.log(isArraySumEvenOrOdd( [ ] ) )  // even
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] )) //    -> "even")
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] )) //    ->  "odd”)
console.log(isArraySumEvenOrOdd( [ 0,0 ] ) )  // even
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )) // ->  "odd”)


console.log('\n--------TASK5--------\n');

/*
Write a function named reverse() which takes a string argument and returns the given string 
reversed. 
*/

function reverse(str) {
    let split = str.split(' ').reverse()
    let result = split.map(ele => ele.split('').reverse().join(''))
    return result.join(' ')
}

console.log(reverse("Hello World") )  // "dlroW olleH"
console.log(reverse("TechGlobal")) // labolGhceT
console.log(reverse("Basketball is fun") ) // nuf si llabteksaB


console.log('\n--------TASK6--------\n');

/*
Write a function named reverseWords() which takes a string argument and returns a string 
with each word within that string reversed but still in the same order as the initial string.
*/

function reverseWords(str) {
    let split = str.split(' ')
    let result = split.map(x => x.split('').reverse().join(''))
    return result.join(' ')
}

console.log(reverseWords("Hello World") )  // "olleH dlroW"
console.log(reverseWords("TechGlobal") ) // -> "labolGhceT"
console.log(reverseWords("Basketball is fun") ) // "llabteksaB si nuf"

