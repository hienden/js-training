var array = ["Javascript", "PHP", "Ruby", "HTML", "Angular", "VueJS"];
var a = array[0];
console.log(a); //Javascript
var b = array[2];
console.log(b); //Ruby
var [a, b, ...rest] = array;
// var [array[0], array[2], ...rest]
// console.log(a);
// console.log(b);
console.log(rest);

// console.log("------------------");

var course = {
  name1: "Javascript",
  price: 1000,
  intro: "khoa hoc khoa hoc kha hoj khos",
};

var { price, ...rest } = course;
console.log(rest);

// console.log("------------------");
// console.log("------------------");
// var { name1, price, intro } = course;
// console.log(name1, intro);

// console.log(intro);
// var { name1, intro = "default" } = course;
// console.log(name1);
// console.log(intro);

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num);
// }
// console.log(sum(1, 2, 3, 4, 5));

// console.log("------------------");

// function logger(...params) {
//   console.log(params);
// }
// logger(
//   {
//     name1: "Javascript",
//     price: 1000,
//     intro: "khoa hoc khoa hoc kha hoj khos",
//   },
//   {
//     name1: "react",
//     price: 500,
//     intro: "khoa hoc khoa hoc kha hoj khos",
//   },
//   {
//     name1: "html",
//     price: 900,
//     intro: "khoa hoc khoa hoc kha hoj khos",
//   }
// );

// function myBio(firstName, ...rest) { //nhom vao 1 mang rest parameter
//   console.log(rest);
//   return `${firstName} `;
// }

// // Use spread to expand an array’s items into individual arguments:
// myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);  //phan dai cac phan tu spread operater

// var [a, b] = ["Javascript", "PHP", "Ruby"];
// console.log(a, b);

// console.log("------------------");
// console.log("------------------");

// var course = {
//   name1: "Javascript",
//   price: 1000,
//   intro: "khoa hoc khoa hoc kha hoj khos",
// };
// var { name1, price, intro } = {
//   name1: "Javascript",
//   price: 1000,
//   intro: "khoa hoc khoa hoc kha hoj khos",
// };

// console.log(price, intro);
// console.log(intro);
// var { price, ...rest } = course;

console.log("------------------");
console.log("------------------");

function logger({ ...params }) {
  console.log(params);
}
logger({
  name1: "Javascript",
  price: 1000,
});
