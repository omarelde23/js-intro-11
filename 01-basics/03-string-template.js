const person = {
    fname: 'John',
    lname: 'Doe', 
    age: 25
};

// John Doe will be 30 after 5 years;
let years = 5; 

console.log(person.fname + ' ' + person.lname + ' will be ' + (person.age + years) + ' after ' + years + ' years.');

console.log(`${person.fname} ${person.lname} will be ${person.age + years} after ${years} years.`)


let price = 2.5;
let quantity = 10;

// the total price is = $25

console.log(`The total price is = $${price * quantity}`);
console.log('The total price is = $' + (price * quantity));