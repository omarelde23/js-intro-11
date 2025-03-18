const Person = require('./Person')
class Dancer extends Person {
    constructor(fullname, age, groupName) {
    super(fullname, age) 
    this.groupName = groupName
}
dance(str) {
    return true 
}

}

module.exports = Dancer