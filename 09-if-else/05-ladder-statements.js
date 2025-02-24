/*
Get a random number between -5 and 5
Find if the number is POS, NEG, Neatrul
*/

let ran1 = Math.round(Math.random() * (5 + 5)) - 5; 
console.log(`The random number is ${ran1}`); 

if (ran1 > 0) {
    console.log('POS'); 
}
else if (ran1 < 0) {
    console.log('NEG');
}
else {
    console.log('NEUTRAL')
}
// ternary operator method

let result = ran1 > 0 ? 'POS' : ran1 < 0 ? 'NEG' : 'NEUTRAL';

console.log(result); 

