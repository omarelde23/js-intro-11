// get all the names that have 4 characters 
const names = [ 'Maria', 'Alex', 'John', 'Jane', 'Victoria' ]

const names4 = names.filter((x) => x.length === 4)


console.log(names4)


// How many names have 'a' or 'A'
names = [ 'Maria', 'Alex', 'John', 'Jane', 'Victoria' ]

const names5 = names.filter((x) => {
    return (x.toLowerCase().includes('a'))
})

console.log(names5.length)

