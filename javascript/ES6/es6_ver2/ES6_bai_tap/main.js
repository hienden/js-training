// **Bài tập 1: Biến và khai báo**
// 1. Khai báo một biến let với tên "message" và gán giá trị "Hello, ES6!" vào biến đó.
// 2. Khai báo một hằng số const có tên "PI" và gán giá trị là 3.14159.

let message = "Hello, ES6!";
const PI = 3.14159;

console.log("---------------------------1");

// **Bài tập 2: Arrow function**
// 1. Viết một arrow function có tên "add" nhận vào hai tham số và trả về tổng của chúng.
// 2. Viết một arrow function có tên "double" nhận vào một số và trả về số đó nhân đôi.

const add = (a, b) => a + b;
const double = (a) => a * 2;
console.log(add(1, 2));
console.log(double(2));

console.log("---------------------------2");

// **Bài tập 3: Template literals**
// 1. Viết một hàm có tên "greeting" nhận vào một tên và trả về chuỗi chào mừng "Hello, [Tên]!" bằng cách sử dụng template literals.

function greeting(ten) {
  return `Hello, ${ten}`;
}
console.log(greeting("Elsa"));

console.log("---------------------------3");

// **Bài tập 4: Default parameters**
// 1. Viết một hàm có tên "sayHello" nhận vào một tham số "name" và mặc định "name" là "Guest". Hàm này sẽ trả về chuỗi chào mừng "Hello, [name]!".

function sayHello(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(sayHello("Anna"));

console.log("---------------------------4");

// **Bài tập 5: Destructuring**
// 1. Cho một mảng ["apple", "banana", "orange"], sử dụng destructuring để lấy ra các giá trị "apple" và "banana" vào hai biến riêng biệt.

const [fr1, fr2, fr3] = ["apple", "banana", "orange"];
console.log(fr1);
console.log(fr2);

console.log("---------------------------5");

// **Bài tập 6: Spread operator**
// 1. Cho một mảng ["cat", "dog"] và một mảng khác ["lion", "tiger"]. Sử dụng spread operator để kết hợp cả hai mảng lại thành một mảng mới.

const arr1 = ["cat", "dog"];
const arr2 = ["lion", "tiger"];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log("---------------------------6");

// **Bài tập 7: Classes**
// 1. Tạo một lớp có tên "Person" với constructor nhận vào "name" và "age".
// Lớp này có một phương thức "introduce" trả về chuỗi giới thiệu "Xin chào, tôi là [name] và tôi [age] tuổi."

class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi`;
  }
}
const hien = new Person("Hien", 18);
console.log(hien.introduce());

console.log("---------------------------7");

// **Bài tập 8: Promises**
// 1. Viết một hàm "fetchData" sử dụng Fetch API để lấy dữ liệu từ một URL được cung cấp.
// Hàm này trả về một Promise với dữ liệu lấy được hoặc thông báo lỗi nếu xảy ra lỗi trong quá trình lấy dữ liệu.

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
}
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log("---------------------------8");
