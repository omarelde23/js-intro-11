/*
sumDouble

Given two int values, return their sum. Unless the two values are the same, then return double their sum.
*/

function sumDouble(num1, num2) {
    if (num1 === num2) return (num1 + num2) * 2
    else 
    return num1 + num2
}

console.log(sumDouble(1, 2)) // → 3
console.log(sumDouble(3, 2)) // → 5
console.log(sumDouble(2, 2)) // → 8 


/*
diff21

Given an int n, return the absolute difference between n and 21, 
except return double the absolute difference if n is over 21.
*/

function diff21(num) {
    if (num > 21) return (Math.abs(num - 21)) * 2
    else 
    return Math.abs(num - 21)
}

console.log(diff21(19)) // → 2
console.log(diff21(10)) // → 11
console.log(diff21(21)) //  → 0



/*
parrotTrouble

We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. 
We are in trouble if the parrot is talking and the hour is before 7 or after 20.
 Return true if we are in trouble.
*/

function parrotTrouble(boolean, hour) {
    return (boolean === true) && (hour < 7 || hour > 20) 
}

console.log(parrotTrouble(true, 6)) // → true
console.log(parrotTrouble(true, 7)) // → false
console.log(parrotTrouble(false, 6)) // → false


/*
makes10

Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
*/

function makes10(num1, num2) {
   return (num1 === 10 || num2 === 10) || (num1 + num2 === 10)
}

console.log(makes10(9, 10)) // → true
console.log(makes10(9, 9)) // → false
console.log(makes10(1, 9)) //  → true


/*
nearHundred

Given an int n, return true if it is within 10 of 100 or 200. 
Note: Math.abs(num) computes the absolute value of a number.
*/

function nearHundred(num) {
    return (num >= 90 && num <= 110) || (num >= 190 && num <= 210)
}

console.log(nearHundred(93)) // → true
console.log(nearHundred(90)) //  → true
console.log(nearHundred(89)) //  → false


/*
posNeg

Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, then return true only if both are negative.
*/
 
function posNeg(num1, num2, bool) {
    if (num1 < 0 && num2 < 0 && bool === true) 
        return 
} 