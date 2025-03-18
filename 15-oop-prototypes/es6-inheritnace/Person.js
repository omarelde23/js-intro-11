class Person {
    constructor(fullname, age) {
        this.fullname = fullname
        this.age = age
    }
    eat(str) {
        console.log(`person eats ${str}`)
    }
    sleep(num) {
        console.log(`person sleeps ${num} hours`)
    }
    walk() {
        return true
    }
}

module.exports = Person