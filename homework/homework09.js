console.log('\n--------TASK1--------\n');

/*
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself.
*/

const fizzBuzz1 = numberArg => {
    if (numberArg % 3 === 0 && numberArg % 5 === 0) return 'FizzBuzz';
    else if (numberArg % 3 === 0) return 'Fizz';
    else if (numberArg % 5 === 0) return 'Buzz';
    else return numberArg;
}

console.log(fizzBuzz1(2));


console.log('\n--------TASK2--------\n');

/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

const fizzBuzz2 = numArg => {
    let newArray = [];
    for (let i = 1 ; i <= numArg; i++) {
        if (i % 3 === 0 && i % 5 === 0)  newArray.push('FizzBuzz');
        else if (i % 3 === 0)  newArray.push('Fizz');
        else if (i % 5 === 0) newArray.push('Buzz');
        else newArray.push(i);
    }
    return newArray;
}

console.log(fizzBuzz2(15))



console.log('\n--------TASK3--------\n');

/*
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string
*/

const findSumNumbers = stringArg => {
    let sum = 0;
    let num = '';
    for (let i = 0; i < stringArg.length; i++) {
        if (stringArg[i] >= '0' && stringArg[i] <= '9'){
            num += stringArg[i];
        }
        else {
            if (num) {
                sum += +num;
                num = '';
            }
        }
    }
    if (num !== '') {
        sum += parseInt(num);
    }
    return sum;
}

console.log(findSumNumbers("a1b4c  6#"));




console.log('\n--------TASK4--------\n');

/*
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string
*/


const findBiggestNumber = stringArg => {
    let num = 0;
    let numAsString = '';
    for (let i = 0; i < stringArg.length; i++) {
        if (stringArg[i] >= '0' && stringArg[i] <= '9'){
            numAsString += stringArg[i];
        }
        else {
            if (parseInt(numAsString) > num) {
                num = parseInt(numAsString)
                numAsString = ''
            }
        }
    }
    if (parseInt(numAsString) > num) num = parseInt(numAsString)
    
    return num;
}

console.log(findBiggestNumber("a1b4c  6#10"));




console.log('\n--------TASK5--------\n');

/*
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive
*/

const countOccurrencesOfCharacters = stringArg => {
    if (stringArg.length === 0) return '';

    let result = '';
    let count = 1;

    for (let i = 1; i <= stringArg.length; i++) {
        if (stringArg[i] === stringArg[i - 1]) {
            count++
        }
        else {
            result += count;
            result += stringArg[i - 1]
            count = 1;
        }
    }

    return result;
}


console.log(countOccurrencesOfCharacters("abbcca"));


console.log('\n--------TASK6--------\n');

/*
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array. 
*/

const fibonacciSeries1 = number => {
    let fibSeries = []
    for (let i = 0; i < number; i++) {
        if (i === 0 || i === 1) fibSeries.push(i)
        else fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2])
    }

    return fibSeries
}

console.log(fibonacciSeries1(8))




console.log('\n--------TASK7--------\n');

/*
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

const fibonacciSeries2 = numberArg => {
    if (numberArg === 1) return 0;
    else if(numberArg === 2) return 1;
    else return fibonacciSeries2(numberArg - 1) + fibonacciSeries2(numberArg - 2);
}
console.log(fibonacciSeries2(8))



console.log('\n--------TASK8--------\n');

/*
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array
*/

const findUniques = (array1, array2) => {
    let longerArray = Math.max(array1.length, array2.length)
    let array3 = [];
    if (array1.length === 0 && array2.length === 0) return [];

    for (let i = 0; i < longerArray; i++) {
        if(i < array1.length && !array2.includes(array1[i]) && !array3.includes(array1[i])) {
            array3.push(array1[i]);
        }
        
        if(i < array2.length && !array1.includes(array2[i]) && !array3.includes(array2[i])) {
            array3.push(array2[i]);
        }
    }

    return array3
}

console.log(findUniques([1, 2, 3], [3, 4, 5]))




console.log('\n--------TASK9--------\n');

/*
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios
*/

const isPowerOf3 = numArg => {
    if (numArg < 1) return false;

    while (numArg % 3 === 0) {
        numArg = numArg / 3
    }

    return numArg === 1;
}
console.log(isPowerOf3(27))
