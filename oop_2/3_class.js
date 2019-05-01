const output1 = document.getElementById('sms');

/*
// DEFININIG CLASS WITH PROTOTYPE METHOD
class Player{

    constructor(name, age, club){
        this.name = name;
        this.age = age;
        this.club = club;
        console.log("From constructor");
    }
    getInfo = () =>{
        output1.textContent = `${this.name} plays for ${this.club} and his age ${this.age}`;
    }
}

let p = new Player("Mbappe",  21 , "Paris SG");
p.getInfo();
*/


// UNNAME CLASS
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);


// NAME CLASS
let Rectangle2 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);

// STATIC METHOD AND PROTOTYPES
class Animal { 
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }
  
  let obj = new Animal();
  obj.speak(); // Animal {}
  let speak = obj.speak;
  speak(); // undefined
  
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat(); // undefined


