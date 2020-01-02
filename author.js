var Book = require('./book.js');

class Author {
  constructor({first, last}) {
    this.first = first;
    this.last = last;
    this.books = [];
  }
//I want a new Book class to be created
  write(title, year) {
    var book = new Book(this.first, this.last, title, year);
    this.books.push(book);
    return book
  }

}

module.exports = Author;
