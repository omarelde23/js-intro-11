// find the first even number from the array   -> 0
const nums = [ -1, 1, 3, 0, 2, 6, 8 ]

let firstEven;

for(const num of nums) {
    if(num % 2 === 0) {
        firstEven = num;
        break;
    }
}

console.log(firstEven)



// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city
    break
}
}

console.log(firstOddLengthCity)


// find all the cities that has length more than 5 
cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

const array = []

for(const city of cities) {
    if(city.length > 5) {
        array.push(city)
    }
}

console.log(array)
