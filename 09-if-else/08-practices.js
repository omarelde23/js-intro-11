let username = 'TechGlobal'; //TechGlobal
let password = 'SuperSecretPasswrod'; //Test1234

if(username === 'TechGloabl') {
    if(password === 'Test1234') {
        console.log('You are logged in');
    }
    else {
        console.log('invalid Password entered')
    }
}
else {
    console.log('Invalid username entered')

}



/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let ran = Math.round(Math.random() * (12 - 1)) +1;
console.log(`My random number is ${ran}`); 

if (ran === 12 || ran === 1 || ran === 2 ) {
    console.log('Winter')
}
else if  (ran === 3 || ran === 4 || ran === 5) {
    console.log('Spring')
}
else if (ran === 6 || ran === 7 || ran === 8) {
    console.log('Summer');
}
else {
    console.log('Fall')
}
