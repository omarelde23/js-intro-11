/*
console.log(date.getFullYear());

console.log(date.getDay());

console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.getMonth());

console.log(date.getTime());

console.log(date.getDate());

*/
const date = new Date();

let dayOfTheWeek = date.getDay() ; // 0-6

switch(dayOfTheWeek) {
    case 0:
    case 6:
        console.log('WEEKEND')
        break ;
        default: 
        console.log('Weekday')
}


// ternerary operator

let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'WEEKEND' : 'WEEKDAY' ;
console.log(result);









