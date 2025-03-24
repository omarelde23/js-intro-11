const Book = require('./book')
const Author = require('./author')

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694)
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768)
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973)

const books = [ book1, book2, book3 ]
const author1 = new Author('George R. R', 'Martin', 'United States', books)

console.log(author1.getFullName())

console.log(author1.getBooks().reduce((acc, curr) => curr.page > acc.page ? curr : acc).title)