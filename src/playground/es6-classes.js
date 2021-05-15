class Person {
  constructor (name = "Anonymous", age = 0){
    this.name = name;
    this.age = age;
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`;
  }
}

class Traveler extends Person {
  constructor (name, age, homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
  }
   getDescription(){
    let description = super.getDescription()

    if (this.homeLocation){
      description += ` They are from ${this.homeLocation}`;
    }
    return description;
  }
}

const me = new Traveler("Amy Venter", 19, "South Africa");
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());
