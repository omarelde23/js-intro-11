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
    const dictionary = {}
    for(let i = 0; i < str.length; i++) {
        if(str[i] === ' ') continue
        else if(/[a-zA-Z]/g.test(str[i])) {
            dictionary.letters = (dictionary.letters || 0) + 1
        }
        else if(/[0-9]/i.test(str[i])) {
            dictionary.numbers = (dictionary.numbers || 0) + 1
        }
        else {
            dictionary.specials = (dictionary.specials || 0) + 1 
        }
    }
    return dictionary
}

console.log(countChars("123AbC!@#")) // 	-> {letters: 3, numbers: 3, specials: 3}



console.log('\n--------TASK3--------\n');

/*
Write a function named maxOccurrences() which takes a string argument and returns the character 
that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. 
This task is case sensitive. Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
*/

function maxOccurrences(str) {
    let maxChar = ''
    let maxCount = 0
    const dictionary = {}
    for(const ele of str) {
        if(dictionary[ele]) dictionary[ele]++
        else dictionary[ele] = 1
    }

    for(const char of str) {
        if(char === ' ') continue
        else if(dictionary[char] > maxCount) {
            maxCount = dictionary[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxOccurrences("Occurrences")) // -> "c"


console.log('\n--------TASK4--------\n');

/*
Write a function named starOut() which takes a string argument and 
returns it back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
*/

function starOut(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] !== '*' &&
            str[i - 1] !== '*' &&
            str[i + 1] !== '*'
        ) {
            result += str[i];
        }
    }

    return result;
}

console.log(starOut("ab*cd")) // 	-> "ad"



console.log('\n--------TASK5--------\n');

/*
Write a function named romanToInt() which takes a string roman numeral as its arguments 
and return the roman numeral converted to the number. 
A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
*/

function romanToInt(roman) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        let current = values[roman[i]];
        let next = values[roman[i + 1]];

        if (next > current) {
            total += (next - current);
            i++; // skip next character
        } else {
            total += current;
        }
    }

    return total;
}

console.log(romanToInt("CXII")) 	//	-> 112

