// Object of photos

const bookPhotos= {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },

    getAge: function () {
            const years = new Date().getFullYear() -this.year;
            return `${this.title} is ${years}` ;
    }
}


//CREATE OBJECT
const book1 = Object.create(bookPhotos);
book1.title = "Vogue";
book1.author = ' Anna Wintour';
book1.year = "2013";
console.log(book1);