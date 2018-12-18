function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear .tis.year;
    return `${this.title} is ${years}` 
}


//INSTANTIATE AN OBJECT
const book3 = new Book('Percy Jackson', "some one", 2000);
// console.log(book1);
console.log(book3.getSummary());