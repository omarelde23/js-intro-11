const book = {
    author: {
        fname: 'Stefan',
        lname: 'Zweig',
    },
    title: 'Amok',
    pages: 62
}

Object.freeze(book)  //immutable (not changeable)
console.log(Object.isFrozen(book)) // true 
book.price = 10.99
book.pages = 65
delete book.author

console.log(book)