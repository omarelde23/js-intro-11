function sum(num1, num2) {
    console.log(`First argument is ${num1}`)
    console.log(`Second argument is ${num2}`)
    console.log(`Their sum is ${num1 + num2}`)
}
// default value for num1 and num2 is undefined 
sum(3)


// set your own default 

function sum(num1, num2 = 0) {
    console.log(`First argument is ${num1}`)
    console.log(`Second argument is ${num2}`)
    console.log(`Their sum is ${num1 + num2}`)
}
sum(3)
