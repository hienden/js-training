// function User(firstName, lastName, avatar) {
//   this._first = firstName;
//   this._last = lastName;
// }
// const user1 = new User("hien", "hoang", "ava");
// console.log(user1);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   makeSound() {
//     console.log("Animal make sound");
//   }
// }
// const chim = new Animal("vet", 3);
// console.log(chim.makeSound());

// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age);
//     this.breed = breed;
//   }
//   makeSound() {
//     console.log("Dog barks");
//   }
// }
// const dog = new Dog("buggy", 3, "Golden Retriever");
// console.log(dog.name);
// console.log(dog.breed);
// console.log(dog.makeSound());

console.log("-----------------------------");
//getter và setter xem Hoidanit
//  constructor(name) # this._name # get name() #  set name() biến name có thể đặt khác nhau
class Person {
  constructor(name) {
    this._name = name;
  }

  // Getter cho thuộc tính _name
  get name() {
    return this._name;
  }

  // Setter cho thuộc tính _name
  set name(newName) {
    if (newName.trim() !== "") {
      this._name = newName;
    }
  }
}

const teacher = new Person("ha");
console.log(teacher.name);
teacher.name = "diu";
console.log(teacher);

console.log("-----------------------------");

class Person2 {
  constructor(_age, firstName, lastName) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //getter
  get age() {
    return this._age;
  }

  //setter
  set age(age2) {
    if (age2 < 0 || age2 > 150) {
      throw Error("Invalid age");
    }
    this._age = age2;
  }
}

let person2 = new Person2(25, "hoi dan it", "Eric");
let checkAge = person2.age; // getter

person2.age = 69; //setter

// person2.setAge(69);
console.log(">>> check age: ", person2);
