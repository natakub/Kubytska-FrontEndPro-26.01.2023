class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = +maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log(`You have reached the maximum number of apartments`);
    }
  }
}

//  Cтворити декілька екземплярів класу Людина;

const person1 = new Person(`Daryna`, `female`);
const person2 = new Person(`Anton`, `male`);
const person3 = new Person(`Roman`, `male`);
const person4 = new Person(`Alisa`, `female`);

// декілька екземплярів класу Квартира;

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

// додадити екземпляри класу Людина до екземплярів класу Квартира;

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment2.addResident(person4);
apartment3.addResident(person3);

// екземпляр класу Будинок;

const building1 = new Building(2);

// додадити екземпляри класу Квартира до екземплярів класу Будинок.

building1.addApartment(apartment1);
building1.addApartment(apartment2);
building1.addApartment(apartment3);

console.log(building1);
