function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}



//INSTANTIATE AN OBJECT
const book1 = new Book('Harry Porter', 'rolling', 2012);
const book2 = new Book('Percy Jackson', "some one", 2000);
console.log(book1);