// install globally
// https://www.typescriptlang.org
// npm install -g typescript
// tsc -v
// CLASS, PUBLIC, INTERFACE ONLY ALLLOW IN TYPESCRIPT. THAT WILL NOT WORK IN JAVASCRIPT
// tsc fileName (COMPILE THE CODE INTO PURE JS FILE)
//tsc --target es6 fileName



class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log( greeter(user));

