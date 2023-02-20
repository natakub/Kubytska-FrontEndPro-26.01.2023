class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Owner: name: ${this.name}, age: ${this.age} years old.`);
  }
}

class Car {
  constructor(brand, model, modelYear, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.modelYear = modelYear;
    this.licensePlate = licensePlate;
  }

  getOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log(`Owner of the car cannot be under 18.`);
    }
  }

  getCarInfo() {
    console.log(`Car info:
    Brand: ${this.brand};
    Model: ${this.model};
    Model year: ${this.modelYear};
    License plate: ${this.licensePlate}`);
    this.owner.sayHi();
  }
}

// створити декілька екземплярів класу Людина;

const person1 = new Person(`Daryna`, 35);
const person2 = new Person(`Anton`, 19);
const person3 = new Person(`Roman`, 16);

// декілька екземплярів класу Автомобіль;

const car1 = new Car(`Toyota`, `Toyota Camry`, `2016`, `CA 7890 BT`);
const car2 = new Car(`Mazda`, `MAZDA3`, `2023`, `BM 2065 XP`);

// присвоїти власників автомобілям.

car1.getOwner(person1);
car2.getOwner(person3);
car2.getOwner(person2);

//

car1.getCarInfo();
car2.getCarInfo();
