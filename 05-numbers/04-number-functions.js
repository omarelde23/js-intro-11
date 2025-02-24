let num1 = 10.4551;


console.log(num1.toFixed(2)); // 10.46
console.log(num1.toPrecision(2)); // 10

console.log((22.25).toFixed(2)); // 22.25
console.log((2.225).toPrecision(2)); // 2.2

let num2 = 5;
let num3 = 10;

console.log(num2 + num3);
console.log(num2.toString() + num3.toString()); // '510'





console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false


console.log(Number.isSafeInteger()); // anything below the MAX SAFE INTEGER


Number.parseFloat
console.log(Number.parseInt('10') + 5); //15
console.log(Number.parseInt('10.5') + 5); //15

console.log(Number.parseFloat('10.5') + 5); // 15.5