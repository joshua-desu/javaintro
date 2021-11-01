class Person {
    constructor(name, pets, residence, hobby) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobby = hobby;
    }
    info() {
        console.log(this.name, this.pets, this.residence, this.hobby)
    }
    greeting() {
        console.log('Hello')
    }
}

let joshua = new Person("Joshua", 1, "111 Street", ["guitar", "japanese", "walking"])
joshua.info();

class Coder extends Person {
    greet(name) {
        console.log('Hi ${name}, I see you are a coder')
    }
}

let bobby = new Coder("Bobby", 3, "444 Jalepeno", ["coding", "exercising"]).greet