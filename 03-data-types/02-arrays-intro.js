// Arrays
let studentName = 'Ayah';

//Multiple names, numbers, objects, strings, prices
let name1 = 'John';
let name2 = 'Max';
let name3 = 'James';


const names = ['John', 'Max', 'James']; //sting array
const numbers = [5, 7, 10]; //number array

console.log(names);
console.log(numbers);

const favoriteMovies = ['Matrix', 'Avengers', 'fast and Furious'];
// 0, 1, 2
// Access a specific element in the array
let secondMovie = favoriteMovies[1]; // Avengers
console.log(favoriteMovies[2]); // Fast and Furious

console.log(favoriteMovies[3]); //undefined (there is no number 3)


const cities = ['Rome', 'Berlin'];
console.log(cities.length); //2

//Update an existing element
cities[1] = 'Chicago';
console.log(cities);

// Add a new element
cities[2] = 'Miami'; 
cities.push('Miami'); 
cities.push('Miami', 'Bent') // this is better so you dont have to make cities[3], cities[4], etc
console.log(cities); 


const ids = [100, 101, 102, 103];

let firstElement = ids[0];
let lastElement = ids[ids.length-1]; //this will chnage if you add/remove elements from the array thats why you use (ids.length-1)



