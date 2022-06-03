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

function addBookToLibrary() {
  let title = prompt('Enter Title')
  let author = prompt('Enter the Author')
  let pages = prompt('How many pages?')
  let read = prompt('Have you read the book yet?')
  let newBook = new Book(title, author, pages, read)
  // let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

function bookData() {
  for (books of myLibrary) {
    let main = document.querySelector('main')
    let p = books
    main.appendChild(p)
  }
}
