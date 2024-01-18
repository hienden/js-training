// //primitive (tham trị): gồm giá trị nguyên thủy (number, string, bool)
// // Ý nghĩa: tham trị chỉ sao chép giá trị của 1 biến vào 1 biến khác, or truyền giá trị vào 1 function như tham số
// let a = 1;
// let b = a;
// console.log(a === b); //true
// a = 3;
// console.log("a: ", a); // 3
// console.log("b: ", b); // 1

// // reference (tham chiếu): gồm giá trị (object, array)
// // Ý nghĩa : tham chiếu đến địa chỉ ô nhớ của 1 biến

// const obj1 = { name: "hieu", age: 27 };
// const obj2 = obj1;
// const obj3 = { name: "hieu", age: 27 };

// console.log(obj1 === obj2); // true
// console.log(obj1 === obj3); // false
// console.log(obj2 === obj3); // false

// obj1.name = "hien";
// obj2.age = 18;
// // obj3.name = "tho";
// console.log("obj1", obj1.name); // hien
// console.log("obj2", obj2.name); // hien
// console.log("obj3", obj3.name); // tho

// console.log("obj1", obj1.age); // 18
// console.log("obj2", obj2.age); // 18
// console.log("obj3", obj3.age); // 27

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// const arr3 = [1, 2, 3];

// console.log(arr1 === arr2); // true
// console.log(arr2 === arr3); // false
// console.log(arr1 === arr3); // false

// arr1.push(4);
// arr2.unshift(0);

// console.log(arr1); // [0,1,2,3,4]
// console.log(arr2); // [0,1,2,3,4]
// console.log(arr3); // [1,2,3]

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
let x = 10;
function increment(a) {
  a++;
  console.log(a); // Output: 11
}
increment(x);
console.log(x); // Output: 10 (giá trị ban đầu của x không bị thay đổi)
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

// vd3 : tham tri
let x1 = 10;
function increment(a1) {
  return a1 + 1;
}
x1 = increment(x1); // return tra ve
console.log(x1); //11

// // vd4
// let obj1 = { value: 10 };
// let obj2 = obj1;

// obj2.value = 20;
// console.log(obj1.value); // 20
