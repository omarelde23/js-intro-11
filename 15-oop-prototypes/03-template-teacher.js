function Teacher(fname, lname, age, field) {
    this.fname = fname
    this.lname = lname
    this.age = age
    this.field = field 
}

Teacher.prototype.teach = function () {
    console.log(`${this.fname} teaches ${this.field}`)
}

Teacher.prototype.giveHomework = function () {
    console.log(`${this.fname} gives homework`)
}

const teacher1 = new Teacher('jane', 'doe', 23, 'Math')
const teacher2 = new Teacher('mary', 'global', 19, 'English')
const teacher3 = new Teacher('jenny', 'ksinskwi', 39, 'Science')
const teacher4 = new Teacher('hannah', 'dann', 46, 'History')