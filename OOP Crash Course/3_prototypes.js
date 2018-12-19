function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

//WE WANT TITLE AUTHOR AND YEAR FOR EVERY BOOK BUT WE DON'T WANT PROTOTYPES METHOW FOR EVERY BOOK
Book.prototype.getSummary = function () {
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() -this.year;
    return `${this.title} is ${years}` 
}


// REVICE / CHANGE YEAR
Book.prototype.revise =(newYear)=>{
    this.year = newYear;
    this.revise =true;
}


//INSTANTIATE AN OBJECT
const book3 = new Book('Percy Jackson', "some one", 2000);
// console.log(book1);
// console.log(book3.getSummary());

// console.log(book3.getAge());

// console.log(book3);
// book3.revise('2018');
// console.log(book3);