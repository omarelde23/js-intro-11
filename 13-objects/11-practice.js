const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: [ 'Soccer', 'Watching Movies'],
    examScores: {
        midterm: 60,
        final: 90
    }
}

console.log(student.hobbies)
console.log(student.examScores)
console.log(student.hobbies[0])

const allExamValues = Object.values(student.examScores)
let average = allExamValues.reduce((acc, curr) => acc + curr, 0) / allExamValues.length

console.log(average)