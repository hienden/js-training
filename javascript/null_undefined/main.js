var headingNode = document.getElementById("heading123");
console.log(headingNode); //null

//**** Null, undefine, emptry, Ép Kiểu

// let c; // undefined
let c = ""; // => string empty
// let c = [];  // [] => array empty
// let c = {}; // {} => onject empty

// let c = null;
console.log(typeof c);

// undefine:  tạo 1 biến mà không gán giá trị => biến đó sẽ trả về undefine => Kiểu dữ liệu undefine (chưa được định nghĩa)

// null:  nó có nghĩa rằng 1 obj là rỗng và nó không trỏ đến địa chỉ vùng nhớ nào => kiểu dữ liệu là Object
// null: là 1 kiểu dữ liệu nguyên thủy trong js

// var a = Boolean(null); // false
// var a = String(null); // kiểu chuỗi => null
// var a = Number(null); //  kiểu số => 0
var a = Object(null); // {}
console.log(a);

// các toán tử cũng có thể được sử dụng với null

console.log(4 + null); // 4

let nonNumericString = "Hello";
let result = nonNumericString * 2; // Kết quả: NaN (Not a Number)
console.log(result); // Kết quả: NaN

console.log(true + 0); // 1 + 0 = 1
console.log(true - 1); // 1 - 1 = 0
console.log(true - ""); // 1 - 0 = 1
console.log(true + ""); // true (string)
console.log(true - "a"); // NAN
console.log(true + "a"); // truea (string)
console.log(null - 2); // 0 -2 = -2
console.log(undefined + 1); // NAN
console.log(undefined - 1); // NAN
console.log("" + 1); // 1 (string)
console.log(undefined == null);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof true);

let x = "100";
let y = "10";
console.log(x - y);

console.log(typeof NaN);

var z = Number(false);
console.log(z);

let h = 1;
let i = 1;
console.log(h === i);

console.log("B" < "A");
console.log("A" < "Z"); // true
console.log("Smazl" > "Smart"); // true
console.log("Big" < "BigBang"); // true

const e = 2;
const result1 = e % 2 === 0 ? "so chan" : "so le";
console.log(result1);

function print(a, b) {
  return; // định nghĩa một hàm
}
// Undefined // giá trị được định nghĩa
console.log(print(2, 3));

function foo() {
  return;
}
console.log("is undefined?", foo());

function print(a, b) {
  console.log(a);
  console.log(b);
}
print(3);

console.log(NaN + 1);
