console.log('\n--------TASK1--------\n');

/*
Write a function named repeatingX() which takes a string argument and 
returns true if the letter x is followed by another x. Otherwise, return false.
NOTE: This method should be case-insensitive
*/

function repeatingX(str) {
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++) {
        if((str[i] === 'x' && str[i + 1] === 'x')) return true
    }
    return false
}

console.log(repeatingX("xTechxGlobalx")) // false
console.log(repeatingX("Hello Xx World")) // true
console.log(repeatingX("xxxxx")) // true
console.log(repeatingX("x x")) // false


console.log('\n--------TASK2--------\n');

/*
Write a function named isPerfectSquare() which takes a number as an 
argument and checks if it is a perfect square. It returns true if the number is a 
perfect square and false otherwise.
*/

function isPerfectSquare(num) {
    let root = Math.sqrt(num)
    if(Number.isInteger(root)) return true
    return false
}

console.log(isPerfectSquare(25)) // -> true)
console.log(isPerfectSquare(24)) //-> false)
console.log(isPerfectSquare(0)) // true
console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(-1)) // false
console.log(isPerfectSquare(144)) // true


console.log('\n--------TASK3--------\n');

/*
Write a function named convertTemperature() which takes a number and a 
string arguments to be considered as a temperature value and a unit (either 
Celsius or Fahrenheit) as arguments and converts the temperature to the other 
unit.
*/

function convertTemperature(num, str) {
    if(str === 'Celsius') {
        return (num * 1.8) + 32
    }
    else return (num - 32) * 5/9
}

console.log(convertTemperature(100, 'Celsius')) // 212
console.log(convertTemperature(32, 'Fahrenheit'))  // 0
console.log(convertTemperature(0, 'Celsius'))  // 32
console.log(convertTemperature(212, 'Fahrenheit'))  // 100
console.log(convertTemperature(-40, 'Celsius'))  // -40
console.log(convertTemperature(-40, 'Fahrenheit'))  // -40



console.log('\n--------TASK4--------\n');

/*
Write a function named sumOfEvenNumbers() which takes an array as an 
argument and returns the sum of all the even numbers in an array.
*/

function sumOfEvenNumbers(arr) {
    let sum = 0
    for(const num of arr) {
        if(num % 2 === 0) sum += num
    }
    return sum
}

console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ) ) // 30
console.log(sumOfEvenNumbers( [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ] ) )  // 110
console.log(sumOfEvenNumbers( [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ] ) )  // 0
console.log(sumOfEvenNumbers( [ 1, 2, 3, 4, 5 ] ) )  // 6
console.log(sumOfEvenNumbers( [ 10, 20, 30, 40, 50 ] ) )  // 150



console.log('\n--------TASK5--------\n');

/*
Write a function named capsOdds() which takes an array argument and returns the array with 
all the odd index elements capitalized (converted to uppercase).
*/

function capsOdds(arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) newArr.push(arr[i].toUpperCase())
            else newArr.push(arr[i])
    }
return newArr
}

console.log(capsOdds(["Hello", "World"]) )  // -> ["Hello", "WORLD"]
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"]) ) 
console.log(capsOdds(["John !@#$%", "^&*() Doe"]) )
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"]) )
