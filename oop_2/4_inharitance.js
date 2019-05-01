/*
// INHARITANCE PROPERTY
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;


// Public field declarations
class RectangleTwo {
    height = 0;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
*/



/*
//INHARITANCE AMD MAKING SUB CLASS
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
*/


// CALLING SUPERCLASS
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

let l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.