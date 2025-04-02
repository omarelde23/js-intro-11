console.log('\n --------TASK01---------\n');

/*
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
*/

function hasLowerCase(str) {
   return /[a-z]/.test(str)
}

console.log(hasLowerCase("JAVASCRIPT")) // 	-> false
console.log(hasLowerCase("hello")) // 		-> true
console.log(hasLowerCase("125$")) // 		-> false
console.log(hasLowerCase("   a   ")) //		-> true


console.log('\n --------TASK02---------\n');

/*
Write a function named noZero() which takes an array of numbers as argument and 
returns the array back with all zeros removed.
*/

function noZero(arr) {
    return arr.filter((x) => x !== 0)
}

console.log(noZero([0, 1, 10])) // 	-> [1, 10]
console.log(noZero([0, 0, 0])) // 	-> []
console.log(noZero([10, 100, 0])) //	-> [10, 100])



console.log('\n --------TASK03---------\n');

/*
Write a function named numberAndSquare() which takes an array of numbers as argument 
and returns a multidimensional array with all numbers squared. 
*/

function numberAndSquare(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        result.push([arr[i], arr[i] ** 2])
    }
return result 
}

console.log(numberAndSquare([1, 2, 3])) //	-> [[1, 1], [2, 4], [3, 9]])
console.log(numberAndSquare([0, 3, -6])) //	-> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])) // 	-> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 1, -10])) //	-> [[0, 0], [1, 1], [-10, 100]])



console.log('\n --------TASK04---------\n');

/*
Write a function named containsValue() which takes a string array and a string as arguments and
returns a boolean value. Search the string variable inside of the array and return true if it exists in the array. 
If it doesn’t exist, return false. ​
*/

function containsValue(arr, str) {
    return arr.includes(str)
}

console.log(containsValue(["abc", "def", "123"], "Abc")) //			-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")) // 	-> true)
console.log(containsValue(["abc", "foo", "javascript"], "hello")) //			-> false


console.log('\n --------TASK05---------\n');

/*
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​ 
If there is no enough words reverse, return "There is not enough words!".
*/

function reverseSentence(str) {
    let splitted = str.split(' ')
    if(splitted.length <= 1) {
        return('There is not enough words!')
    }
    let reversed = splitted.reverse(str)
    return reversed.join(' ')
}

console.log(reverseSentence("Hello")) //		-> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")) // 		-> "Fun is javascript"
console.log(reverseSentence("This is a sentence")) //	-> "Sentence a is this")


console.log('\n --------TASK06---------\n');

/*
Write a function named removeStringSpecialsDigits() which takes a string as argument and 
return a string without the special characters or digits.
*/

function removeStringSpecialsDigits(str) {
    return str.replace(/[^a-zA-Z\s]/g, '')
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")) //  	-> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Automation123#$%")) //	-> "Automation")


console.log('\n --------TASK07---------\n');

/*
Write a function named removeArraySpecialsDigits() which takes a string array as argument and 
return back without the special characters or digits.
*/

function removeArraySpecialsDigits(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/[^a-zA-Z\s]/g, '')
    }
return arr
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])) //	-> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])) // -> ["Automation", "tool"]


console.log('\n --------TASK08---------\n');

/*
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
*/

function getCommons(arr1, arr2) {
    for(const ele of arr1) {
        for(const element of arr2) {
            if(ele === element) {
                return ele
            }
        }
    }
    return []
}

console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )) //	-> ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )) //	-> ["C#"])
console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )) //		-> []


console.log('\n --------TASK09---------\n');

/*
Write a function named noXInVariables() which takes an array as argument and 
return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/

function noXInVariables(arr) {
    for(let i = 0; i < arr.length; i++) {
       let mapped = arr.map(word => typeof word === "string" ? word.replace(/[xX]/g, '') : word)
        return mapped.filter(word => word !== '')
    }

}

console.log(noXInVariables(["x", 123, "#$%"])) //	-> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])) // 	-> ["yyy", "ABC"])
console.log(noXInVariables(["abc", 123, "#$%"])) //		-> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])) // 		-> ["yz", 123, "#$%"]

