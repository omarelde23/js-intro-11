//string

let fullname = 'Omar Eldeirawi';

console.log(fullname); 

console.log(typeof fullname)

console.log(typeof ''); //string



//Number
let wholeNum = 10;
let decimalNum = 15.99; 

console.log(wholeNum);

console.log(typeof wholeNum);

console.log(typeof '25'); //string not number because it is in the quotes


// bigint

let biggestNumber = Number.MAX_SAFE_INTEGER;
let smallestNumber = Number.MIN_SAFE_INTEGER;

console.log(biggestNumber); 9007199254740991
console.log(smallestNumber); 

let number = 900719925474099120393484n;
console.log(number)

console.log(typeof biggestNumber) //number
console.log(typeof number) //bigint

console.log(900719925474099120393484n + 5n); //bigint requires bigint to be used



// boolean
let b1 = true;
let b2 = false; 

console.log(b1); 
console.log(b2);

console.log(typeof b1);
console.log(typeof b2);

let age = 15; 

let allowed = age >= 16; //false

console.log(allowed);


console.log(typeof (5 === 5)); //boolean


//null
let SSN = null; 
console.log(SSN); //null
console.log(typeof SSN); //object

//undefined is for variables that are declared but not assignesed a value yet, while null is ...

// Symbol
let s1 = Symbol('Foo');

console.log(Symbol)