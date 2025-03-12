function validateAgeForDL(age) {
    if(age >= 16) return 'Valid!'
    throw new Error(`${age} is not alowed for DL`) 
}

try {
    const r1 = validateAgeForDL(15)

console.log(r1)
} 
catch(error) {
    console.log('Error', error.message)
}

console.log('Rest of the program') 