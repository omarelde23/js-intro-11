function printHi() {
    console.log('Hi');
}

printHi();
printHi();


function runMyDaily() {
    console.log('Prepare coffee');
    console.log('Take a shower');
    console.log('Drink coffee');
    console.log('Head to school');
}

runMyDaily();



// Function declaration with an argument
function hiName(name) {
    console.log(`Hi ${name}`);
}

hiName('John');
hiName('Adam');


// Function declaration with two arguments

function greetName(name){
    console.log(`Hello ${name}`);
    console.log(`Good morning ${name}`);
}

greetName('John!');
greetName('James!');


function average(num1, num2){
    let sum = num1 + num2;
    let average = sum/2
    return average
};

console.log(average(3, 5));