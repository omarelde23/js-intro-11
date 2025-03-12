/*
Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])                         -> 1
*/

function firstPos(arr) {

}

console.log(firstPos([0, 3, -9,  5, 8]))



/*
Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

const lastNeg = arr => arr.filter(x => x < 0).at(-1)

console.log(lastNeg([0, 3, -9,  5, 8]))
console.log(lastNeg([-2, 0, -7, 10, -5]))


/*
Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

// const firstLongest = arr => arr.filter((x) => Math.max(x.length, ))
// const firstLongest = arr => arr.reduce((acc, curr) => arr[curr].length > arr[acc].length ? curr : acc)
// console.log(firstLongest(["red", "blue", "yellow", "white"]))


const firstLongest = arr => {
    let longest = arr[0]
    for(const num of arr) {
        if(num.length > longest.length) longest = num
    }
    return longest
}

console.log((firstLongest(["red", "blue", "yellow", "white"])))



/*
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the smallest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/

function min(arr) {
    let smallest = arr[0]
    for(const num of arr) {
        if(num < smallest) smallest = num
    }
        
            return smallest
    }

// EASIER WAY
    // const min = arr => Math.min(...arr)
console.log(min([0, 3,  5, 8]))
console.log(min([-2, 0, -7, 10, -5]))



/*
write a function named commonElement which takes two arrays and returns 
all of 
*/

/*
const commonElement = (arr1, arr2) => {
    let result = []

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr.length; j++){
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i])
                break
            }
            return result 
        }
        
        }}
    */

        const commonElement = (arr1, arr2) => {
            arr1.reduce((common, ele) => arr2.includes(ele) && !common.includes(ele) ? common.concat(ele) : common, [])
        }