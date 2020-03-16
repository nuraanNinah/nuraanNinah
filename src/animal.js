class Animal {
    constructor(name) {
        this.name = name;
    }
    sounds() {
        return this.name + " makes a sound";
    }
    eat() {
        return this.name + " eats";
    }
}
class Dog extends Animal {
    sounds() {
        return this.name + " barks";
    }
}
class Cat extends Animal {
    sounds() {
        return this.name + " meows"
    };
}

class Home {
    constructor() {
        this.array = []
        this.sound = []
    }
    adoptPet(animal) {
        this.array.push(animal)

        return ``
    }
    makeAllSounds() {

        for (let i = 0; i < this.array.length; i++) {
            this.sound.push(this.array[i].sounds())
        }
        return this.sound.join("\n")
    }
}

let home = new Home()
let dog = new Dog("Barks")
let cat = new Cat("Cat")
let dog1 = new Dog("Dog");
let dog2 = new Dog("Dog");
dog.eat()
dog.sounds()
cat.eat()
cat.sounds()
home.adoptPet(dog2)
home.adoptPet(dog1)
home.adoptPet(cat)
home.makeAllSounds()



module.exports = {Animal}
module.exports = {Dog}
module.exports = {Cat}
module.exports = {Home}