// key is always string 
// value can be null, undefined, number, boolean, string, array, object, function
// JSON does not support undefined, Symbol(), function


const person = {
    fname: 'John',
    mname: null, 
    lname: 'Doe',
    age: 25,
    married: undefined,
    isMember: true,
    favMovies: [ 'The Batman', 'Red' ],
    address: {
        street1: '2800 S River Rd', 
        street2: 'Ste 310',
        city: 'Des Plaines',
        states: 'IL',
        zip: 12345
    }
}

for(const key in person) {
    console.log(person[key])
}



const cat = {
    name: 'Ra',
    age: 1, 
    sound: function() {
        console.log('MEOW!')
    }, 
    getMood: function() {
        return 'HUNGRY'
    },
    getInfo: function() {
        console.log(`Name: ${this.name}, age: ${this.age}`)
    }
}

cat.sound()
console.log(cat.getMood())

cat.getInfo()