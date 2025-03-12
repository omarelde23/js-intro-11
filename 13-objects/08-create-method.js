const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25
}

const person2 = {
    ...person,
    isLive: true
}

console.log(person)
console.log(person2)