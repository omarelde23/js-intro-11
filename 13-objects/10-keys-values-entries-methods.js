const phone = {
    brand: 'Iphone', 
    storage: 64,
    color: 'Yellow',
    price: 1000
}

console.log(Object.keys(phone)) // [ 'brand', 'storage', 'color', 'price' ]
console.log(Object.values(phone)) // [ 'Iphone', 64, 'Yellow', 1000 ]
console.log(Object.entries(phone)) 

// keys: array of keys
// values: array of values
// entries: nested array of properties


for(const key of Object.keys(phone)) {
    console.log(key)
}

for(const value of Object.values(phone)) {
    console.log(value)
}


for(const entry of Object.entries(phone)) {
    console.log(entry)
}