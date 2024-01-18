// var headingNode = document.getElementById("heading123");
// console.log(headingNode); //null

// 1. Lấy h1 element và lưu vào biến h1Element
// 2. Lấy h2 element và lưu vào biến h2Element
// 2. Lấy h3 element và lưu vào biến h2Element

// let h1Element = document.querySelector("h1");
// console.log(h1Element);

// let h2Element = document.querySelector("h2");
// console.log(h2Element);

// let h3Element = document.querySelector("h3");
// console.log(h3Element);
console.log("-----------------------");
// let h1Element = document.getElementsByTagName("h1");
// console.log(h1Element);

// let h2Element = document.getElementsByTagName("h2")[0];
// console.log(h2Element);

// let h3Element = document.getElementsByTagName("h3")[0];
// console.log(h3Element);
console.log("-----------------------");
// var headings = document.getElementsByClassName("heading");
// console.log(headings);
// for (var key in headings) {
//   console.log(headings[key]);
// }
// for (var i = 0; i < headings.length; i++) {
//   console.log(headings[i]);
// }

// console.log(document.querySelectorAll("input"));

// let headingElement = document.querySelector("h1");
// headingElement.setAttribute("id", "heading");
// headingElement.id = "hien";
// console.log(headingElement.id);
// console.log(headingElement.className);

// var boxElement = document.querySelector(".box");
// boxElement.style.width = "100px";
// boxElement.style.height = "200px";
// boxElement.style.backgroundColor = "red";

// var h1Elements = document.querySelectorAll("h1");
// h1Element.onclick = console.log("hi");

// console.log([h1Element]);

// h1Element.onclick = function () {
//   console.log(Math.random());
// };

// function handleClick() {
//   console.log("hello");
// }

// for (var i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function (e) {
//     console.log(e.target);
//   };
// }

// for (let i = 0; i < h1Elements.length; i++) {
//   h1Elements[i].onclick = function (e) {
//     console.log(this);
//   };
// }

// var inputvalue;
// var inputElement = document.querySelector("input[type='text']");
// console.log(inputElement);
// inputElement.oninput = function (ez) {
//   inputvalue = ez.target.value;
// };

// var inputElement = document.querySelector("input[type='checkbox']");
// inputElement.onchange = function (e) {
//   console.log([e.target.checked]);
// };

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function (e) {
//   console.log(e.which);
// };
// function myFunction() {
//   const li = document.getElementById("myList").children[0];
//   const text = document.createTextNode("Water");
//   li.replaceChild(text, li.childNodes[0]);
// }

// Truy cập các phần tử trong Form bằng name hoặc id
const usernameInput = document.getElementById("usernameInput");
console.log(usernameInput);
const passwordInput = document.myForm.password;
console.log(passwordInput);

// Hoặc truy cập các phần tử trong Form bằng tag name
const formElements = document.myForm.getElementsByTagName("input");
console.log(formElements);
