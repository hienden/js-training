// spread operator (syntax: sử dụng dấu...)
// đối mảng [...arr] => ý nghĩa: phân giải các phần tử trong mảng
// thành phần tử riêng lẻ

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = a.concat(b);
const d = [...a, ...b];
console.log(c);
console.log(d);

const e = [...a]; // reference (e thay đổi a không bị thay đổi)

// ối vói object {...obj} => Ý nghĩa: phân giải các thuộc tính trong 1 obj
const f = { name: "tho", age: 26 };
const g = { ...f };

g.name = "hieu";
console.log(g);
console.log(f);

// rest operator: (sử dụng...) => Ý nghĩa: gom nhóm các phần tử vào 1 mảng
function test([...restParam]) {
  //   console.log(p1);
  //   console.log(p2);
  //   console.log(p3);
  console.log("rest operator", restParam);
}
test([1, 2, 3]);

//Destructuring: cho phép chúng ta trích xuất giá trị từ các mảng
// hoặc đối tượng vào các biến riêng biệt một cách dễ dàng.
// Điều này giúp việc truy cập và sử dụng các phần tử của mảng hoặc thuộc tính của đối tượng trở nên ngắn gọn và dễ đọc hơn.

//Destructuring Array
const h = ["hello", "xin chao", "ni hao"];
const [h1, h2] = h; // <=> tạo ra 3 biến h1,h2,h3 riêng biệt

console.log(h1);
console.log(h2);

const j = ["hello", "xin chao", "ni hao", "abc", "hieu", "hoang"];
const [j1, j2, ...j3] = j;
console.log(j1);
console.log(j2);
console.log(j3);

//Destructuring Obj

const obj1 = {
  name: "hien",
  age: 27,
  model: "handsome",
};
// const key1 = obj1.name;
// const key2 = obj1.age;
// const key3 = obj1.model;

const { name: firstName, age: birthday, model } = obj1;
console.log("destruct", firstName);
console.log("destruct", birthday);
console.log("destruct", model);

const obj2 = {
  name: "hien",
  address: { city: "thai binh", district: "dong hung" },
};
// obj2.address.city

// const { address: obj3 } = obj2;

const {
  address: { city },
} = obj2; // <=> obj2.address.city
console.log(city);

// Bài tập: // Đổi chỗ 2 giá trị sử dụng tính năng destructuring
let sw1 = 10;
let sw2 = 100;
// Muốn đổi chỗ 2 giá trị cho nhau sw1 = 100, sw2 = 10
// let temp = sw1; // 10
// sw1 = sw2; // 100
// sw2 = temp; // 10
// console.log("sw1", sw1);
// console.log("sw2", sw2);

//c2
const arrTemp = [sw2, sw1]; // [100,10]
[sw1, sw2] = arrTemp; // [sw1, sw2] = [sw2, sw1]

console.log("sw1", sw1);
console.log("sw1", sw2);

// Arrow function: là cách khai báo function nhưng cú pháp của nó sẽ ngắn gọn hơn

// function Declaration
function a1(p1, p2) {
  // code...
}

// function Expression
const a2 = function (p1, p2) {
  // code...
};

// arrow function
const a3 = (p1, p2) => {
  // code...
};

const calculateTotal1 = (a, b) => {
  const sum = a + b;
  return sum;
};

const calculateTotal2 = (a, b) => a + b; // <===> return a+b

// caloulateTotal(7, 6);

const isOddNumber = (a) => (a % 2 !== 0 ? true : false); //ternary operator

// sự khác nhau giữa arrow function và function thông thường

const obj3 = {
  firstName: "hieu",
  lastName: "pham",
  getFullName: function () {
    console.log("obj3", this);
    console.log(this.firstName + this.lastName);
    return this.firstName + this.lastName;
  },
};

const obj4 = {
  firstName: "hieu",
  lastName: "pham",

  // không được phép sử dụng arrow function làm method trong 1 object  (this trong arrow function trong Object thường)
  getFullName: () => {
    console.log("obj4", this);
    console.log(this.firstName + this.lastName);
  },
};
obj3.getFullName(); //hieu pham
obj4.getFullName(); //NaN

// Object constructor (this trong arrow function trong Object constructor)
// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.getCar = () => {
//     console.log("obj4", this);
//     console.log(this.name + this.color); // this trỏ đến phạm vi ngoài gần nhất là Car
//   };
// }
// const honda = new Car("honda city", "black");
// honda.getCar();

// Default Parameters: cho phép chúng ta định nghĩa giá trị mặc định cho các tham số của hàm.
//  Nếu giá trị tham số không được truyền vào khi gọi hàm,
// thì giá trị mặc định sẽ được sử dụng thay vì giá trị undefined.

function testDefaultParamV1(p1) {
  console.log(p1);
}
function testDefaultParamV2(p1, p2 = "xin chao") {
  console.log("v2", p1);
  console.log("v2", p2);
}
testDefaultParamV1("hello");
testDefaultParamV1(); //undefined

testDefaultParamV2("hello"); // hello, xin chao
testDefaultParamV2(); // undefined, xin chao

// template literal: cho phép bạn tạo chuỗi một cách dễ dàng và
// linh hoạt hơn bằng cách nhúng biến và biểu thức vào bên trong dấu
// backticks (`). Trước khi có Template Literals, chúng ta thường phải
//  sử dụng các phép cộng chuỗi (+) hoặc phép nối chuỗi để tạo ra các
//  chuỗi có giá trị động.
// Tuy nhiên, đây là một cách làm không hiệu quả và khó đọc.

const str1 = "xin";
const str2 = "chao";

const str3 = str1 + str2;
const str4 = str1.concat(str2);

// template literals
const str5_1 = `${str1} ${str2}`;
console.log(str5_1);

const str5 = `Lorem Ipsum is simply
       dummy text of the printing and typesetting industry. 
       Lorem ${str1} ${str2}`;
const str6 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ${str1} ${str2}";
const str7 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ${str1} ${str2}";
console.log(str5, str6, str7);

const isMan = true;
const str8 = `toi co gioi tinh: ${isMan ? "dan ong" : "dan ba"}`;
console.log(str8);

const str9 = `tong cua 3 + 9: ${3 + 9}`;
console.log(str9);

const str10 = `hien thi ten day du: ${obj3.getFullName()}`;
console.log(str10);
