// install globally
// https://www.typescriptlang.org
// npm install -g typescript
// tsc -v
// CLASS, PUBLIC, INTERFACE ONLY ALLLOW IN TYPESCRIPT. THAT WILL NOT WORK IN JAVASCRIPT
// tsc fileName
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
console.log(greeter(user));
