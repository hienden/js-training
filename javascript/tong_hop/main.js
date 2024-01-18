// // // // 1. Hoisting: là cơ chế của js tự động đưa khai báo biến lên đầu
// // // Hoisting với biến Var & Khởi tạo giá trị mặc định là undefines nếu không được gán giá trị
// // Với biến
// console.log(age); // undefines
// console.log(fullname); // ReferenceError: fullname is not defined => dừng
// var age = 16; // enzyme sẽ đọc qua 1 lượt và phân tích cú pháp, thấy var age = 16 là cú pháp được hoisting => lưu biến a vào bộ nhớ
// // thực thi lại chương trình chạy lại từ đầu dòng 1 thì trong bộ nhớ đã có biến age đc khỏi tạo không gán kết quả => undefine
// console.log(age);

// // Với function Declaration (KHÔNG ÁP DỤNG Với Expression F và Arrow F)
// console.log(sum(6, 9)); // 15 // Sử dụng sum trước khi khai báo hàm
// // Khai báo hàm
// // thấy cú pháp được hoisting đưa phần khai báo hàm này lên đầu
// function sum(a, b) {
//   return (sum = a + b);
// }
// // // Hoisting với biến Let/Const (vẫn được hoisting nhưng cơ chế khác với var): Không tạo ra giá trị mặc định và được đưa vào "Temporal Dead Zone"
// và không thể truy cập được
// {
//   console.log(fullName); // ReferenceError: Cannot access 'fullName' before initialization
//   let fullName = "Nguyen Van A";
// }

// // // // 2. IIFE - Immediately Invokes Function Expression: Là 1 function Expression được gọi ngay lập tức (là 1 biểu thức tạo ra 1 hàm
// và hàm đó được gọi ngay lập tức) cú pháp ( function ) (gọi)
// 2. Dùng dấu ; trước IIFE

// (function () {
//   console.log("NOW NOW");
// })(); // NOW NOW

// // Arrow function => in ra Hello
// (() => {
//   console.log("Hello");
// })();

// // // // 2. Scope trong Javascript: - là phạm vi hoạt động của 1 biến hoặc 1 Hàm
// - block scope nhằm thu nhỏ phạm vi hoạt động của 1 biến, để dễ kiểm soát và xử lý
// Các loại phạm vi:
// - - - Global - Toàn cầu : ở đâu cũng có thể truy cập được
// - - - Code block - Khối mã: Let, Const ( Các đoạn mã được viết trong { } if else, for, while,..)
// - - - Local scope - Hàm: var, function declaration ( phần thân của hàm khi hàm được gọi )
// + Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra
// + các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
// const age = 18; //(32) Dòng 36 cũng truy cập đc dòng 32
// function logger() {
//   const age = 18;
//   function logger2() {
//     console.log(age); (36)
//   }
//   logger2();
// }
// logger();
// + khi nào 1 biến bị xóa khỏi bộ nhớ
// . Biến toàn cầu: khi ctrinh thoát: khi f5, tắt tab
// . Biến trong code block và trong hàm: khi thoát khỏi phạm vi { } (sau dấu }) .sau khi gọi hàm
// . Biến trong hàm được tham chiếu bởi 1 hàm: Biến được tham chiếu trong (closer) sẽ không được xóa khỏi bộ nhớ khi hàm cha thực hiện xong
// mà sẽ được xóa khi ctrinh thoát

// // ví dụ phạm vi Global
// với biến
// var message = "Học Về Scope";
// function logger() { // truy cập được biến message
//   console.log(message);
// }
// logger();
// let x = true;
// if (x) {
//   var y = "Diu Hoang";
// }
// console.log(y); //  Diu Hoang

// let x = true;
// if (x) {
//   const y = "Diu Hoang";
// }
// console.log(y); //  Lỗi
// với hàm
// function log() {
//   console.log("IN RA LOG");
// }
// function logger() { // truy cập được hàm log
//   log();
// }
// logger();

// // ví dụ phạm vi code Block - Khối mã: Let, Const
// {
//   const age = 18; // hoặc let đều trả về kết quả như nhau
//   console.log(age); // 18
// }
// console.log(age); // lỗi ReferenceError: age is not defined
// // * khi có các scope con trong scope cha thì scope con có thể truy cập biến của scope cha.
// //Ngược lại là sai. VD:
// {
//   const age = 18; // hoặc const đều trả về kết quả như nhau
//   console.log(age); // 18
//   {
//     // hoặc const đều trả về kết quả như nhau
//     console.log(age); // 18
//     const name = "hien";
//   }
//   console.log(name); // lỗi
// }

// //sử dụng var trong code block
// {
//   var age = 18; // sử dụng var trong code block nó sẽ nhảy ra phạm vi bên ngoài gần nhất
//   // TH này là global
// }
// console.log(age); // 18

// // // ví dụ phạm vi Local scope (function)
// với biến sử dụng var (với let, const cũng vậy) chỉ được sử dụng trong Local scope
// function logger() {
//   var fullName = "Hiền Hoàng";
//   //   console.log(fullName); // Hiền Hoàng
// }
// logger();
// console.log(fullName); // Lỗi ReferenceError: fullName is not defined

// với hàm
// function logger() {
//   function logger2() {
//     console.log("LOG 2");
//     function logger3() {
//       console.log(count4); // Lỗi do count4 chỉ được truy cập ở logger4. Không truy cập được biến bên trong function con
//       console.log("LOG 3");
//       const count3 = "number log 3";
//       function logger4() {
//         console.log("LOG 4");
//         console.log(count3); // number log 3// truy cập được biến bên ngoài function cha
//         const count4 = "number log 4";
//       }
//       logger4(); // LOG 4
//     }
//     // logger4(); // Lỗi logger4() không thể gọi đc ngoài function logger3
//     logger3(); // LOG 3
//   }
//   logger2(); // LOG 2
// }
// logger();
// logger2(); // Lỗi logger2() không thể gọi đc ngoài function logger

// // // // 3. closure: là 1 hàm được viết lồng vào bên trong hàm khác (hàm cha). Nó có thể sử dụng biến toàn cục, biến cục bộ của hàm cha
// và cũng có thể sử dụng biến cục bộ của chính nó
//(là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó)

// function sum(a, b) {
//   const c = a + b;
//   console.log(c); // 3
//   return c;
// }
// sum(1, 2);

// ví dụ 1 sử dụng closure. hàm trả về 1 hàm
// function sum(a, b) {
//   const c = a + b;
//   return function () {
//     console.log(c); // 3
//   };
// }
// sum(1, 2)();

// // ví dụ 2 sử dụng closure. hàm trong 1 hàm (vẫn trả về 1 hàm)
// function createCounter() {
//   let counter = 0;
//   //closure
//   function increase() {
//     return ++counter;
//   }
//   return increase;
// }
// const counter1 = createCounter();
// console.log(counter1()); // counter = 1
// console.log(counter1());
// console.log(counter1());

// // ví dụ 3
// function createApp() {
//   const cars = [];
//   return {
//     add(car) {
//       cars.push(car);
//     },
//     show() {
//       console.log(cars); // cars = [car]
//     },
//   };
// }
// const app = createApp();
// app.show();

// app.add("BMW");

// app.show();

// app.add("honda");
// app.add("porsche");

// app.show();

// console.log("-------------------------------------------------------");

// // // // 5. higher order function: là 1 hàm hoạt động dựa trên 1 hàm khác, tức là nó có thể nhận hàm làm tham số đàu vào
// hoặc sẽ return ra 1 hàm khác.  Một trong 2 điều kiện xảy ra thì gọi là higher order function

// vd1 về Higher order function
// function debug(name) {
//   return function (str) {
//     console.log(`[${name}] ${str}`);
//   };
// }
// const log = debug("Mouse");
// log("Error happened");

// vd2 về higher order function
// function waitAndRun(ms, func) {
//   setTimeout(() => {
//     func();
//   }, ms);
// }
// function run() {
//   console.log("running");
// }
// waitAndRun(2000, run);

// or

// function waitAndRun(ms, func) {
//   setTimeout(func, ms);
// }
// function run() {
//   console.log("Run");
// }
// waitAndRun(2000, run);

// // // // 4. Toán từ ++ -- với tiền tố & hậu tố
// let x = 10;

// const z = ++x;
// console.log(z);
// console.log(x);
// // z = 11
// // x = 11
// const w = ++x;
// console.log(w);
// console.log(x);
// // w = 12
// // x = 12
// const q = x++;
// console.log(q);
// console.log(x);
// // q = 12
// // x = 13
// const e = --x;
// console.log(e);
// console.log(x);
// // e = 12
// // x = 12
// const t = x++;
// console.log(t);
// console.log(x);
// // t = 12
// // x = 13
// const y = x--;
// console.log(y);
// console.log(x);

// y = 13
// x = 12

// let a = 1;
// let b = a;
// console.log(b);
// console.log(a);
// a = 2;
// console.log(a);
// console.log(b);

// var a = 6;
// var output = a + 1;
// console.log(output); // 7
// console.log(a); // 6

// var a = 6;
// // Việc 1: +1 cho a, a = a + 1 => a = 7
// // Việc 2: Trả về a sau khi được + 1
// var output = ++a;
// console.log(output); // 7
// console.log(a); // 7

// var a = 6;
// // Việc 1: `a copy`, `a copy` = 6
// // Việc 2: +1 cho a, a = a + 1 => a = 7
// // Việc 3: trả về `a copy`
// var output = a++;
// console.log(output); //6
// console.log(a); //7

// var a = 6;
// var output = a++;
// console.log(output);
// console.log(a);

// console.log("--------------------------------");

// // // // 4. fetch API
// fetch("https://jsonplaceholder.typicode.com/users") // trả ra 1 promise
//   .then((response) => {
//     return response.json(); // return 1 promise. Muốn trả dữ liệu nên phải dùng promise chain => .then()
//     // JSON.parse: JSON -> Javascript types
//   })
//   .then((data) => {
//     console.log(">>> check fetch data:", data);
//   });

// // // // 5. async await dùng với function
// Sử dụng async trước function => function sẽ trở thành Promise
// const getNewTodo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   let data = await response.json();
//   return data;
// };
// // async function getNewTodo() {}
// getNewTodo(2).then((data) => {
//   console.log(">>> check get data", data);
// });

// // xử lý lỗi API với async await
// const getNewTodo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   console.log(">>> check response", response);
//   if (response && response.status !== 200) {
//     return new Error("Something wrongs with status code: " + response.status); // dùng return
//   }
//   let data = await response.json();
//   return data;
// };
// // async function getNewTodo() {}
// getNewTodo("abc").then((data1) => {
//   console.log(">>> check get data", data1);
// });

// bắt lỗi dùng catch
// const getNewTodo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   console.log(">>> check response", response);
//   if (response && response.status !== 200) {
//     throw new Error("Something wrongs with status code: " + response.status);
//     //reject
//   }
//   let data = await response.json();
//   return data; // resolve
// };
// getNewTodo("abc")
//   .then((data) => {
//     console.log(">>> check get data", data);
//   })
//   .catch((err) => {
//     console.log(">>> check error: ", err.message);
//   });

// bắt lỗi dùng try & catch
const getNewTodo = async (id) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    if (response && response.status !== 200) {
      throw new Error("Something wrongs with status code: " + response.status);
      //reject
    }
    let data = await response.json();
    return data; // resolve
  } catch (e) {
    console.log(">>> check catch error: ", e.message);
  }
};
getNewTodo("abc")
  .then((data) => {
    console.log(">>> check get data", data);
  })
  .catch((err) => {
    console.log(">>> check error: ", err.message);
  });

// // // // 5. primitive và reference: Kiểu dữ liệu tham trị và tham chiếu
// là 2 cách để truyền dữ liệu cho biến
// 5.1. tham trị : Khi ta sao chép giá trị của biến này cho biến khác thì giá trị của 2 biến này độc lập và không liên quan với nhau
// khi thay đổi giá trị của biến này thì biến kia vẫn không đổi
// đây là tham trị
//vd1
// let a = 1;
// let b = a; // sao chép giá trị của biến a cho b
// console.log(b); // 1
// b = 2; // Dù gán b=a, nhưng khi b thay đổi thì a vẫn không thay đổi
// console.log(a); // 1
// console.log(b); // 2
//vd2
// let x = 10;
// function increment(a) {
//   a++;
//   console.log(a); // Output: 11
// }
// increment(x);
// console.log(x); // Output: 10 (giá trị ban đầu của x không bị thay đổi)
// Trong ví dụ trên, biến x có giá trị ban đầu là 10. Khi truyền x vào hàm increment, giá trị của x được sao chép vào biến a.
// Khi thay đổi giá trị của a, giá trị của x không bị ảnh hưởng.

// 5.2. tham chiếu: thay vì sao chép giá trị của biến, thì chỉ tham chiếu đến vị trí của biến trong bộ nhớ.
// Các thay đổi sẽ ảnh hưởng đến tất cả các biến tham chiếu đến cùng 1 vị trí đó
// đây là tham chiếu
//vd1
// const a = { name: "hien" };
// const b = a;
// console.log(b.name); // hien
// a.name = "tho";
// console.log(a.name); // tho
// console.log(b.name); // tho

//vd2
// let obj = { value: 10 };
// function increment(objRef) {
//   objRef.value++;
//   console.log(objRef.value); // 11
// }
// increment(obj);
// console.log(obj.value); // 11

// vd3
// let x = 10;
// function increment(a) {
//   return a + 1;
// }
// x = increment(x);
// console.log(x); //11

// // vd4
// let obj1 = { value: 10 };
// let obj2 = obj1;

// obj2.value = 20;
// console.log(obj1.value); // 20

// // // // // 6. This: là từ khóa giúp tham chiếu đến đối tượng mà nó thuộc về. This sẽ có các giá trị khác nhau thuộc vào nơi nó được sử dụng
// // + Trong 1 method của object This sẽ trỏ tới Object chứa method đó (đối tượng trước dấu chấm) (*)
// // + Trong hàm tạo (có 2 this)
// this2(this trong method của hàm tạo) trỏ đến obj chứa method đó
// this1(this trong hàm tạo) là đại diện cho đối tượng sẽ được tạo
// // + trong 1 funtion, this sẽ trỏ tới global object, global ở đây đối tượng window
// declaration function có context là window
// // + trong 1 arrow funtion () => {} . Arrow function không có context nghĩa là (khôngcógì.myFunc1) nó sẽ lấy this ở phạm vi bên ngoài gần nhất của nó
// arrow function không có context (có sẽ linh động lấy this phạm vi bên ngoài gần nhất của nó )
// // + khi 'this' đứng 1 mình có nghĩa là không ở trong method, hay function nào cả thì nó cũng trỏ tới global obj là window
// // + Trong event handler, "this" sẽ trỏ tới element trên DOM mà đang kích hoạt 1 sự kiện nào đó
// // + các method bind(), call(), apply() this sẽ trỏ tới bất kỳ object nào mà 3 method trên nhận vào

// // + Trong 1 method This sẽ trỏ tới Object chứa method đó (đối tượng trước dấu chấm) (*)
// const iphone7 = {
//   name: "iphone 7",
//   color: "gold",
//   weight: 300,
//   takePhoto() {
//     console.log(this); // {name:'iphone7', color: 'gold'...}
//   },
//   edit: {
//     name: "child",
//     editPhoto() {
//       console.log(this); // {name:'child',  editPhoto() { console.log(this)}}
//     },
//   },
// };
// iphone7.takePhoto(); // this trong takePhoto trỏ tới obj iphone7
// iphone7.edit.editPhoto(); // this trong editPhoto trỏ tới obj edit

// // + Trong hàm tạo (có 2 this)
// this2(this trong method của hàm tạo) trỏ đến obj chứa method đó
// this1(this trong hàm tạo) là đại diện cho đối tượng sẽ được tạo
// function Car(name, color, weight) {
//   this.name = name; //this1 (dòng 290 this là honda) / (dòng 291 this là bmw)
//   this.color = color;
//   this.weight = weight;
//   this.run = function () { //method
//     console.log("Running...", this); // this2 => // {name:"honda city", color:"black"... }
//   };
// }
// const honda = new Car("honda city", "black", "450");
// const bmw = new Car("bmw 450", "blue", "650");
// honda.run(); // this trong method run trỏ đến obj honda (obj trước dấu .)
// console.log(honda.name); // honda city (290)
// console.log(bmw.name); // bmw 450 (291)

// // + trong 1 funtion, this sẽ trỏ tới global object, global ở đây đối tượng window
// declaration function có context là window
// function myFunc() {
//   console.log(this); // window
// }
// myFunc();

// * trong 'use strict'. Với 1 hàm bình thường thì 'this' sẽ trả về undefine vì function myFunc không phải là 1 method của đối tượng
// "use strict";
// function myFunc() {
//   console.log(this); // undefine
// }
// myFunc();

// * trong 'use strict'. Với 1 hàm bình thường mà chúng ta trỏ đến đối tượng window thì 'this' sẽ trỏ đến đối tượng window
// ("use strict");
// function myFunc() {
//   console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }
// window.myFunc(); // vì có window.

// // + trong 1 arrow funtion () => {} . Arrow function không có context nghĩa là (khôngcógì.myFunc1) nó sẽ lấy this ở phạm vi bên ngoài gần nhất của nó
// arrow function không có context (có sẽ linh động lấy this phạm vi bên ngoài gần nhất của nó )
// vd1 TH này sẽ lấy this ở phạm vi ngoài gần nhất là window nên trả về window
// const myFunc1 = () => {
//   console.log(this); // window
// };
// myFunc1();

// vd2 arrow funtion () => {} TH này sẽ lấy this ở phạm vi ngoài gần nhất là Car
function Car(name, color) {
  this.name = name;
  this.color = color;
}
// //tạo 1 method "run" bằng prototype
Car.prototype.run = function () {
  // Context   this
  function test() {
    console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  }
  test();
  const test = () => {
    console.log(this); // Car {name: 'honda city', color: 'black'} // Car {name: 'bmw 450', color: 'blue'}
  };
  test();
};
const honda = new Car("honda city", "black", "450");
const bmw = new Car("bmw 450", "blue", "650");
honda.run();
bmw.run();

// // + khi 'this' đứng 1 mình có nghĩa là không ở trong method, hay function nào cả thì nó cũng trỏ tới global obj là window
// const a = this;
// console.log(a); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// // + Trong event handler, "this" sẽ trỏ tới element trên DOM mà đang kích hoạt 1 sự kiện nào đó

// const button = document.querySelector("button");
// button.onclick = function () {
//   console.log(this); //  <button>Click me!</button>
// };

// <button onclick="console.log(this);">Click me!</button> //<button>Click me!</button> => gom đoạn code này thành 1 hàm tương tự như trên

// // + các method bind(), call(), apply() this sẽ trỏ tới bất kỳ object nào mà 3 method trên nhận vào

// // // // 7. bind(): Tất cả Function và method (function) trong 1 obj đều có thể kế thừa phương thức bind() của function constructor
// // + Phương thức bind() sẽ trả về 1 hàm mới
// // + Có thể nhận các đối số như hàm ban đầu
// this.firstName = "Minh"; //(374)
// this.lastName = "Thu"; //(375)
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thảo",
//   getFullName(data1, data2) {
//     console.log(data1, data2);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// case 1:
// console.log(teacher.getFullName()); // Minh Thảo
// // case 2:
// const getTeacherName = teacher.getFullName; // truy cập vào function getFullName. Bản chất function là 1 obj đặc biết
// // getTeacherName và getFullName trỏ cùng đến 1 vùng nhớ.
// // console.log(getTeacherName === teacher.getFullName); // true
// //  Nhưng dòng (388) gọi biến getTeacherName() k thông qua đối tượng thì từ khóa "this"
// // trong getFullName sẽ trỏ đến global (374)(375) là (Minh) (Thu)
// console.log(getTeacherName()); // Minh Thu (388)

// case 3: bind() ràng buộc "this" trong getFullName() phải là obj teacher thì:
// const getTeacherName = teacher.getFullName.bind(teacher);
// // Thì lúc này sẽ tạo ra 1 hàm mới địa chỉ mới không cùng địa chỉ với teacher.getFullName
// console.log(getTeacherName === teacher.getFullName); // false
// console.log(getTeacherName("test1", "test2"));

// . ví dụ bind()
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thảo",
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };
// const button = document.querySelector("button");
// // button.onclick = function () {
// //   teacher.getFullName(); // Minh Thảo
// // };
// button.onclick = teacher.getFullName; // undefine undefine (do <button>Click me!</button>.firstName <button>Click me!</button>.lasttName )
// button.onclick = teacher.getFullName.bind(getFullName); // click vào button hiện // Minh Thảo
// button.onclick = teacher.getFullName(); // chưa click vào button đã hiện  // Minh Thảo

// . Ví dụ 1 khó về bind()
// const $ = document.querySelector;
// const $$ = document.querySelectorAll;

// console.log(document.querySelector("#heading")); // <h1 id="heading">Hello bind() method!</h1>
// console.log($("#heading")); //Lỗi: Illegal invocation  context th này sẽ là global obj => this sẽ trỏ đến window. Nhưng trong hàm querySelector đã viết sẵn
// nếu this không trỏ đến obj document thì sẽ báo lỗi

// Khắc phục bind(document)
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// console.log($("#heading"));

// . Ví dụ 2 khó về bind()
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const app = (() => {
//   const cars = ["BMW"];

//   const root = $("#root");
//   const input = $("#input");
//   const submit = $("#submit");

//   return {
//     add(car) {
//       cars.push(car);
//     },
//     delete(index) {
//       cars.splice(index, 1);
//     },
//     render() {
//       const html = cars
//         .map(
//           (car, index) => `
//         <li>
//           ${car}
//           <span class="delete" data-index="${index}">&times</span>
//         </li>
//        `
//         )
//         .join("");
//       root.innerHTML = html;
//     },
//     handleDelete(e) {
//       const deleteBtn = e.target.closest(".delete");
//       if (deleteBtn) {
//         const index = deleteBtn.dataset.index;
//         this.delete(index);
//         this.render();
//       }
//     },
//     init() {
//       submit.onclick = () => {
//         const car = input.value;
//         this.add(car);
//         this.render();

//         input.value = null;
//         input.focus();
//       };

//       root.onclick = this.handleDelete.bind(this);
//       // root.onclick = this.handleDelete.bind(app); // bind(app)

//       this.render();
//     },
//   };
// })();
// app.init();

// // // // 8. call(): Là phương thức trong prototype của function constructor, phương thức này được dùng để gọi hàm và có thể bind this cho hàm
// Ví dụ:
// - Gọi hàm với call method
// - Gọi hàm call() và bind this, lưu ý trong strict mode vẫn có this nếu được bind
// - Thể hiện tính kế thừa (extends) trong OOP
// - Mượn hàm (function borrowing), thêm ví dụ với arguments

// vd1: Gọi hàm với call method
// function random() {
//   console.log(Math.random());
// }
// random.call();

// vd2: Gọi hàm call() và bind this, lưu ý trong strict mode vẫn có this nếu được bind
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
// };
// const me = {
//   firstName: "Hoàng",
//   lastName: "Hiền",
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// me.showFullName(); // Hoàng Hiền
// me.showFullName.call(); // undefined undefined (Nếu mà không truyền đối tượng muốn bind() vào call() thì this trong showFullName không phải là me nữa mà sẽ trỏ đến window. (window.firstName -> undefine )
// // bind() chỉ bind this và trả ra hàm mới và this mới, chứ nó không gọi hàm
// // call() sẽ bind this và gọi luôn hàm đó
// me.showFullName.call(teacher); // Minh Thu (call sẽ bind this trước, sau đó gọi luôn hàm)  Mượn hàm

// this.firstName = "Bùi";
// this.lastName = "Linh";

// function showFullName() {
//   console.log(`${this.firstName} ${this.lastName}`);
// }
// showFullName(); // Bùi Linh (this trong 1 function sẽ trỏ đến đối tượng window)

// trong strict mode (this là undefine)
// "use strict";
// this.firstName = "Bùi";
// this.lastName = "Linh";

// function showFullName() {
//   console.log(this);
//   console.log(`${this.firstName} ${this.lastName}`);
// }
// showFullName(); //Cannot read properties of undefined (reading 'firstName')

// // bind(this) => this trỏ đến window. Sau đó gọi hàm call()
// showFullName.call(this); // Bùi Linh

// vd3: Thể hiện tính kế thừa (extends) trong OOP
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }
// function Chicken(name, weight, legs) {
//   Animal.call(this, name, weight); // extends kế thừa
//   this.legs = legs;
// }
// const sonDang = new Chicken("Sơn Đặng", 66, 2);
// console.log(sonDang);

// vd4: Mượn hàm (function borrowing), thêm ví dụ với arguments
// arguments là 1 đối tượng giống mảng được đánh index. nhưng khi mở prototype sẽ không có các nethod như filter, find, for, map...
// function logger() {
//   console.log(arguments);  // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   arguments.forEach((item) => {
//     // Lỗi arguments.forEach is not a function at logger
//   });
// }
// logger(1, 2, 3, 4, 5);

// giả sử muốn xử dụng forEach với arguments thì sẽ phải mượn phương thức đó của Array
// function logger() {
//   Array.prototype.forEach.call(arguments, (item) => {
//     console.log(item);
//   });
//   const cars = ["BMW", "Honda"];
//   cars.forEach((car) => {
//     console.log(car);
//   });
// }
// logger(1, 2, 3, 4, 5);

// vd4_1: chuyển đổi arguments thành mảng
// function logger() {
//   // const arr = Array.prototype.slice.call(arguments); //
//   // arr.forEach((item) => console.log(item));

//   // const arr = Array.from(arguments);
//   // console.log(arr); // [1, 2, 3, 4, 5]

//   const arr = [...arguments];
//   console.log(arr); // [1, 2, 3, 4, 5]
// }
// logger(1, 2, 3, 4, 5);

// // // // 9. Fn.apply(): Phương thức này cho phép gọi 1 hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng
// vd1
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
// };
// function greet(greeting, message) {
//   return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
// }
// // apply truyền đối số sử dụng mảng [], các đối số cách nhau bởi dấu phẩy ,
// let result = greet.apply(teacher, [
//   "Em chào cô",
//   "Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)",
// ]);
// console.log(result);

// // So sánh với call() method
// result = greet.call(
//   teacher,
//   "Em chào cô",
//   "Cô dạy môn gì thế ạ? (Đã xem cô live stream 1 tiếng)"
// );
// console.log(result);

// // vd2 (Function borrowing)
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
//   isOnline: false,
//   goOnline() {
//     this.isOnline = true;
//     console.log(`${this.firstName} ${this.lastName} is Online`);
//   },
//   goOffline() {
//     this.isOnline = false;
//     console.log(`${this.firstName} ${this.lastName} is Offline`);
//   },
// };
// const me = {
//   firstName: "Hiền",
//   lastName: "Hoàng",
//   isOnline: false,
// };

// console.log("Teacher: ", teacher.isOnline);
// teacher.goOnline();
// console.log("Teacher: ", teacher.isOnline);

// console.log("---------------------------");

// console.log("Student: ", me.isOnline);
// teacher.goOnline.call(me);
// console.log("Student: ", me.isOnline);

// // vd3 Extends kế thừa
// function Animal(name, weight) {
//   this.name = name;
//   this.weight = weight;
// }
// function Parrot() {
//   Animal.apply(this, arguments);
//   this.speak = function () {
//     console.log("Nhà có khách!");
//   };
// }
// const conVet = new Parrot("Vet", 300);
// console.log(conVet);
// conVet.speak();

// // // // So sánh bind(), call(), apply() :
// Giống nhau: Dùng để mượn hàm và extends - kế thừa
// là các method được kế thừa từ Function.prototype
// Cách truy cập
// function fn() {}
// // bind()
// fn.bind();
// // call()
// fn.call();
// // apply
// fn.apply();
// console.dir(Function);
// Khác nhau
// * Bind() method
// - Trả về 1 hàm mới với `this` tham chiếu tới `thisArg`
// - Không thực hiện gọi hàm
// - Nếu được bind kèm `arg1, arg2,...` thì các đối số này sẽ được ưu tiên hơn
// const newFn = fn.bind(thisArg, arg1, arg2,...)
// newFn(arg1, arg2,...)
// // * Call() method
// - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc từ `arg1, arg2,...`
// fn.call(thisArg, arg1, arg2,...)
// // * Apply() method
// - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2,...]`
// fn.apply(thisArg, [arg1, arg2,...])
