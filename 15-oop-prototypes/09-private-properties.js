class Customer {
    // private preoperty
    #secretInformation = 'Hello'
    notSecret = 'Hi'

    constructor(fullname, address) {
        this.fullname = fullname
        this.address = address
    }
}


const cust1 = new Customer()
const cust2 = new Customer()

console.log(cust1.notSecret) // Hi
console.log(cust2.secretInformation) // undefined