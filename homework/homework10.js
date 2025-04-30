console.log('\n--------TASK1--------\n');

/*
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the total price 
of the given items based on the price list below.

1 Apple is $2.00 
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

function calculateTotalPrice1(obj) {
    const priceList = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let total = 0

    for(const item in obj) {
        if(priceList[item]) {
            total += obj[item] * priceList[item]
        }
    }
    return total.toFixed(2)
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 }) ) // 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }) )   // 19.12



console.log('\n--------TASK2--------\n');

/*
Write a function named calculateTotalPrice2() which takes an object of some shopping items with 
their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below​.
There will be %50 discount for every second Apple​
There will be 1 free Mango if customer gets 3. So, fourth one is free.

*/

function calculateTotalPrice2(obj) {
    const priceList = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }
    let sum = 0

    for (let item in obj) {
        const quantity = obj[item];
        const key = item.toLowerCase();

        if (key === 'apple') {
            const fullPriceApples = Math.floor(quantity / 2) + (quantity % 2);
            const halfPriceApples = Math.floor(quantity / 2);
            sum += (fullPriceApples * priceList.apple) + (halfPriceApples * priceList.apple * 0.5);
        } else if (key === 'mango') {
            const freeMangos = Math.floor(quantity / 4);
            const payableMangos = quantity - freeMangos;
            sum += payableMangos * priceList.mango;
        } else if (priceList[key]) {
            sum += quantity * priceList[key];
        }
    }

    return sum.toFixed(2); 
}

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })) //			-> 24.96





console.log('\n--------TASK3--------\n');

/*
Write a function named nthWord() which takes a string and a number 
arguments and returns the nth word in the string. 
Note: Function should return empty string if the number argument is greater 
than the count of the words in the given string
*/

function nthWord(str, num) {
    let splitString = str.split(' ')
    if(num > splitString.length) return '';
    return splitString[num - 1]
}

console.log(nthWord("I like programming languages", 2)  )
console.log(nthWord("QA stands for Quality Assurance", 4))
console.log(nthWord("Hello World", 3) )
console.log(nthWord("Javascript", 1) )
console.log(nthWord('', 1))



console.log('\n--------TASK4--------\n');

/*
Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong, 
return false otherwise.​
Note: An armstrong number is a number that is equal to the sum of its own digits raised 
to the power of the number of digits. In other words, an n-digit number is an Armstrong number 
if the sum of its digits, each raised to the nth power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153.​
To determine if 153 is an armstrong number, we need to check if the sum of its digits, 
each raised to the power of the number of digits, equals the original number.​
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) 
is equal to the original number, which means 153 is an armstrong number.
*/

function isArmstrong(num) {
    let digitsLength = String(num).length
    let sum = 0
    let arrayNum = num.toString().split('')
    for(let i = 0; i < arrayNum.length; i++) {
        sum += Number(arrayNum[i]) ** digitsLength
    }
    return sum === num
}

console.log(isArmstrong(153)) // true
console.log(isArmstrong(123)) //	-> false
console.log(isArmstrong(1634))  // true 
console.log(isArmstrong(1111))  // false




console.log('\n--------TASK5--------\n');

/*
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
*/

function reverseNumber(num) {
    let reversed = num.toString().split('').reverse().join('')
    return Number(reversed)
}

console.log(reverseNumber(371))



console.log('\n--------TASK6--------\n');

/*
Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. 
It will return the array elements doubled if true or tripled if the boolean value is false.​
*/

function doubleOrTriple(arr, bool) {
    if(bool === true) {
       return arr.map(x => x * 2)
    }
    else return arr.map(x => x * 3)
}

console.log(doubleOrTriple([1, 5, 10], true)) // 	-> [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false)) //	-> [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)) //	-> [-2, -4]
console.log(doubleOrTriple([0], false)) //	-> [0]
console.log(doubleOrTriple([-1, 0, 1], true)) //	-> [-2, 0, 2])




console.log('\n--------TASK7--------\n');

/*
Write a function named splitString() which takes a string and a number arguments and returns
the string back split by the given number. 
Note: Return empty string if the string shorter than splitting number or the string length 
is not divisible by the given number.
*/

function splitString(str, num) {
    if(str.legnth < num || str.length % num !== 0) return ''
    else return str.slice(0, num) + ' ' + str.slice(num, str.length)
}

console.log(splitString("JavaScript", 5)) //	-> "JavaS cript"
console.log(splitString("Java", 2)) //	-> "Ja va"
console.log(splitString("Automation", 3)) // ''
console.log(splitString("Hello", 6) ) // ''
console.log(splitString("12", 1)) // 		-> "1 2")