// Khái niệm: Function là khối các câu lệnh thực thi 1 nhiệm vụ nào đó.
// để thực thi function phải gọi đến function đó

//-------------------------
// Cú pháp khai báo function
// cách 1: Function Declaration Function: function ten_function() {// Câu lệnh để thực hiện chức năng nào đó}
// function sayHi() {
//   console.log("Xin chao");
// }
// // Lời gọi function để thực thi các câu lệnh trong function
// sayHi();

// // cách 2: function expression const ten_function = function () { // các câu lệnh}
// const sayHello = function () {
//   console.log("xin chao hello");
// };
// sayHello();

// //-----------------
// function calculateTotal(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
// }
// calculateTotal(1, 2);

// //c2
// const total = function (num1, num2) {
//   const sum1 = num1 + num2;
//   console.log(sum1);
// };
// total(10, 11);

//--------------------------------
// function return

// function calculateTotal2(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
//   return sum;
// }
// const total1 = calculateTotal2(15, 20);
// console.log(total1);

// // scope
// // 1. global scope
// const globalValue = 12;
// function name() {
//   console.log(globalValue);
// }
// name();

// // 2. function Scope
// function name1() {
//   const globalValue2 = 14;
//   console.log(globalValue2);
// }
// name1();

// // -----------------------------
// // function hoisting
// // function declaration : sẽ có hoisting

// sayHi();
// function sayHi() {
//   console.log("Xin chao");
// }

// sayHello2();
// const sayHello2 = function () {
//   console.log("Xin chao Hello");
// };

// let a = 10;
// let b = a.toString();
// console.log(b);

// let a = 10;
// let b = a.toPrecision();
// console.log(b);

// console.log(Number(false));
// console.log(Number("hien"));

// console.log(typeof Number(999));
// console.log(typeof Number("999"));

// console.log(Number([8, 8]));

console.log(Number.parseFloat(10)); // 10
Number.parseFloat("10"); // 10
Number.parseFloat("10.33"); // 10.33
Number.parseFloat(" 34 45 66 "); // 34
Number.parseFloat("He was 40"); // NaN

let x = "100";
let y = "10";
let z = x * y;
console.log(z);
