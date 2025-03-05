// Log each name

const names = [ 'John', 'Jane', 'Alex', 'Max', 'James' ]

for(const name of names) {
    console.log(name)
}


// Count how many names start with j or J  -> 3
let counter = 0
for(let name of names) {
    if(name.toLowerCase().startsWith('j')) counter++
}

console.log(counter)


// count how many names have length of 4  -> 3

names = [ 'John', 'Jane', 'Alex', 'Max', 'James' ]

let theCounter = 0
for(let name of names) {
    if(name.length === 4) theCounter++
}

console.log(theCounter)