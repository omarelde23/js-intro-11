class Citizen {
    batch = 11

    // private properties - encapsulation
    #SSN

    constructor(fullname, age, country) {
        this.fullname = fullname
        this.age = age
        this.country = country
    }

    // getters and setters for private properties which provides in-direct access
    getSSN() {
        return this.#SSN
    }

    setSSN(num) {
        this.#SSN = num
    }
}

const c1 = new Citizen('John Doe', 25, 'US')
const c2 = new Citizen('Jane Doe', 25, 'US')

console.log(c1)
console.log(c2)

c1.setSSN('')