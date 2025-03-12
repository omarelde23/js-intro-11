const batch = {
    number: 11,
    program: 'SDET',
    numberOfStudents: 20
}

// for...in loop

for(const key in batch) {
    console.log(batch[key])
}


// you can use it with arrays too but highly not recomended 
const arr = [ 'Rome', 'Berlin', 'Chicago' ]

for(const key in arr) {
    console.log(arr[key])
}

