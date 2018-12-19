function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//WE WANT TITLE AUTHOR AND YEAR FOR EVERY BOOK BUT WE DON'T WANT PROTOTYPES METHOW FOR EVERY BOOK
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}



//MAGINE CONSTRUCTOR
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}



//inharit proto types
Magazine.prototype = Object.create(Book.prototype);


//INSTANTIATE MAGAZINE OBJECT
const mag1 = new Magazine('National Geographic', 'Susan Goldberg', '1988');



Magazine.prototype.contructor = Magazine;



// console.log(mag1);
// console.log(mag1.getSummary());