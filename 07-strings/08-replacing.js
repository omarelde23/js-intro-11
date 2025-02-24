let str = '123 Street 123'; 

str.replace('123', '###'); 

console.log(str); // 123 Street 123

let replacement = str.replace('123', '###'); 
console.log(replacement); // ### Street 123

let strReplacedAll = str.replaceAll('123', '###');
console.log(strReplacedAll); // ### Street ###


let str1 = 'Morning'
console.log(str1.slice(-5))


let str2 = 'JavaScript'
let answer = str2.slice(0, 3);
console.log(answer);
let answer2 = str2.slice(-3);
console.log(answer2);

let finalAnswer = answer + answer2
console.log(finalAnswer);



