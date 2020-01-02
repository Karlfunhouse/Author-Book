class Book {
  constructor(firstName, lastName, title, year) {
    this.title = title;
    this.publicationYear = year;
    this.author = `${firstName} ${lastName}`
  }

}

module.exports = Book;
