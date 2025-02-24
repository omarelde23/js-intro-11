// Objects

const person = {
    fname: 'John', 
    lname: 'Doe',
    age: 45,
    vip: false
};

console.log(person); //{ fname: 'John', lname: 'Doe', age: 45, vip: false }
console.log(typeof person); // object

//fname
let fname = person.fname;

console.log(fname); // 'John'
console.log(typeof fname); // string

console.log(typeof person.age); //number

//How to access the properties of an object using
console.log(person.fname);
console.log(person.lname);

// Updating the property values for an object

const program = {
    name: 'SDET',
    start: 'Jan 20, 2025',
    duration: '6 months'
};

program.start = 'Jan 27, 2025';
program.duration = '7 months'; 

console.log(program); 


const student = {
    fullname: 'John Doe',
    courses: ['Math', 'Science',],  
    address: {
        street: '123 Abc St',
        number: null, 
        city: 'Chicago',
        state: 'IL',
        ZIPcode: '12345 1234'
    }
};
console.log(student);


// Adding a property to an existing object
student.age = 25
student.favDish = 'chicken';
console.log(student);

// Removing a property from an existing object
delete person.address;
delete person.age; 
delete person.favDish;

console.log(student);
