class Home {
    constructor(name,sound) {
      this.name = name;
      this.sound = sound;
    }
    adoptPet() {
      var newPet =[];
    }
    makeAllSounds(){
      }
  }
var home = new Home();
var dog1 = new Dog("Dog","barks");
var dog2 = new Dog("Dog","barks");
var cat = new Cat("Cat","meows");
home.makeAllSounds();// this doesn't give/return any result/data
home.adoptPet(dog1);
// home.makeAllSounds();
// this prints :
// Dog barks
home.adoptPet(cat);
home.makeAllSounds();
// this prints :
// Dog barks
// Cat meows
home.adoptPet(dog2);
home.makeAllSounds();
// this prints :
// Dog barks
// Cat meows
// Dog barks