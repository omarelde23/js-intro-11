// = assignment operator

// shorthand assignment operators

let num = 5;
//increase the num variable by 5
// num = num + 5;
console.log(num); 

// this above is not preffered
num += 5; 
console.log(num); //10


let n1 = 10; 

n1 *= 2; // 20

n1 /= 4; // 5

n1 **= 3; // 125

console.log(n1); // 125


let n2 = 7; 

n2 += ++n2; 

n2 /= 3; 

console.log(n2++ % 3); 













num1 *= num2; // 24 
num1 += num2; //10
num1 /= num2; //1.5
num1 -= num2; //2
num1 %= num2; //2
num1 **= num2; //1296


// calculate rectangle area and perimeter
let side1 = 5;
let side2 = 8;

console.log('The area of the rectangle is = ' + side1 * side2);
console.log('The perimeter of the rectangle is = ' + (side1 + side1 + side2 + side2));


// 
let salary = 120000; 
//console.log('The monthly salary is = ' (salary / 12));


//right answer

console.log(`Monthly salary is = $${salary / 12}`);
console.log(`Weekly salary is = $${salary / 52}`);
console.log(`Bi-weekly salary is = $${salary / 26}`);



