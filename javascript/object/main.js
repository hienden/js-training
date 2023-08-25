// Object
var person = {
  name: "Thuy Linh",
  age: 18,
  address: "Thai Binh",
};
// const getname = person.name;
// const getname = person["name"];
const name1 = "name";
const getname = person[name1];
console.log(getname);
person.age = 27;
console.log(person);
person.gt = "nu";

let keys = Object.keys(person); // Trả về mảng chứa các key của Object
let values = Object.values(person); // Trả về mảng chứa các giá trị của Object
let entries = Object.entries(person); // Trả về mảng chứa các cặp key-value của Object

console.log(keys);
console.log(values);
console.log(entries);
