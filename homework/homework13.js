console.log('\n--------TASK1--------\n');

/*
Write a function named countVC() which takes a string argument 
and returns an object with the count of vowels and consonants.
*/


function countVC(str) {
    const dictionary = {
        vowels: 0,
        consonants: 0
    }
    const vowels = 'AEOUIaeoui'
    let splitStr = str.split('')
    for(let i = 0; i < splitStr.length; i++) {
        if(/[a-z]/i.test(splitStr[i])) {
            if(vowels.includes(splitStr[i])) dictionary.vowels++
            else dictionary.consonants++
        }
    }
    return dictionary
} 

console.log(countVC("Hello")) //	-> {vowels: 2, consonants: 3}
console.log(countVC("Programming")) //	-> {vowels: 3, consonants: 8}
console.log(countVC("123AbC")) // 	-> {vowels: 1, consonants: 2}


console.log('\n--------TASK2--------\n');

/*
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object.
Also spaces do not count towards any category
*/

function countChars(str) {
    
}
