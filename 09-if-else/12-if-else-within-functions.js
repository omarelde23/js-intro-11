function evenOdd(number) {
    if(number % 2 === 0) {
        return 'EVEN'
    }
    else {
        return 'ODD';
    }
}

console.log(evenOdd(2));
console.log(evenOdd(3));



function posNegZero(number) {
    if (number > 0) {
        return 'POS'
    }
    else if (number < 0) {
        return 'NEG'
    }
return 'ZERO'
}

console.log(posNegZero(2))
console.log(posNegZero(-2))
console.log(posNegZero(0))



function startE (name) {
    return name[0] === 'E' || name[0] === 'e'
}

console.log(startE('Alex'))
console.log(startE(''))


function divisible5(num) {
    return num % 5 === 0
}

console.log(divisible5(12))



function fooBar(number) {
   if (number % 5 == 0 && number % 7 === 0) {
    return 'foobar'
   }
else if (number % 7 === 0) {
    return 'bar'
}
else if  (number % 5 === 0) {
    return 'foo'
}
return number
}

console.log(fooBar(70));
