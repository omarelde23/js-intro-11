const dog = {
    name: 'Johnny',
    age: 3,
    getInfo: function() {
        return this
    }
}

console.log(dog.getInfo())