/*
numbers.map((num) => num % 2 === 0 ? 'even' : 'odd')
*/


// odd, odd, even, even

const numbers = [ 5, 3, 2, 20 ]

console.log(numbers.map((x) => x % 2 === 0 ? 'even' : 'odd')) 



// each sentence's first word -> ['Good', 'I', 'It'];

const sentences = ['Good evening', 'I like arrays', 'It is Monday'];

const firstWords = sentences.map(function (x) {
    return x.slice(0, x.indexOf(' '))
})

console.log(firstWords)


// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

const newSalaries = salaries.map(function(sal) {
    return sal.toFixed(2)
})

console.log(newSalaries)