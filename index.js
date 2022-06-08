let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}.`
  }
}

Book.prototype.info = function () {
  return `${title} by ${author}, ${pages} pages, ${read}.`
}

let book1 = new Book('Harry Potter', 'J.K Rowling', '560', 'Have Read')
let book2 = new Book('Harry dadsa', 'J.K dsadasasd', '21', 'Have no')
myLibrary.push(book1)
myLibrary.push(book2)

function addBookToLibrary() {
  let title = prompt('Enter Title')
  let author = prompt('Enter the Author')
  let pages = prompt('How many pages?')
  let read = prompt('Have you read the book yet?')
  let newBook = new Book(title, author, pages, read)
  // let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  // bookData()
  let p = document.querySelector('p')
  p.textContent = Object.values(newBook.info().split('  '))
  // p.textContent = prompt('ds')
  bookData()
}

window.onload = function () {
  bookData()
}

function bookData() {
  for (let books of myLibrary) {
    let main = document.querySelector('.main')
    let p = document.createElement('p')
    p.textContent = Object.values(books.info().split('  '))
    main.appendChild(p)
    console.log(books)
    return books
  }
}
