// Bài tập 1: Tạo đối tượng
// 1. Tạo một đối tượng có tên "person" biểu diễn thông tin cá nhân của bạn, bao gồm các thuộc tính: "name" (tên), "age" (tuổi), "gender" (giới tính), và "occupation" (nghề nghiệp).
const person = {
  name: "hien",
  age: "27",
  gender: "nu",
  occupation: "CTHDQT",
};
console.log(person);

console.log("--------------1");

// Bài tập 2: Truy xuất thuộc tính
// 1. Sử dụng đối tượng "person" từ bài tập trước để truy xuất và in ra màn hình giá trị thuộc tính "name" và "age".
console.log(`${person.name} ${person.age} `);

console.log("--------------2");

// Bài tập 3: Thay đổi giá trị thuộc tính
// 1. Thay đổi giá trị của thuộc tính "occupation" trong đối tượng "person" thành nghề nghiệp mới của bạn.
person.occupation = "TGD";
console.log(person);

console.log("--------------3");

// Bài tập 4: Thêm thuộc tính mới
// 1. Thêm một thuộc tính "email" vào đối tượng "person" để đại diện cho địa chỉ email của bạn.
person.email = "hoanghien110397@gmail.com";
console.log(person);

console.log("--------------4");

// Bài tập 5: Xóa thuộc tính
// 1. Xóa thuộc tính "gender" khỏi đối tượng "person".
delete person.gender;
console.log(person);

console.log("--------------5");

// Bài tập 6: Duyệt qua tất cả các thuộc tính
// 1. Viết một hàm có tên "printAllProperties" nhận vào một đối tượng và in ra tất cả các thuộc tính và giá trị của đối tượng đó.

// function printAllProperties(obj) {
//   Object.keys(obj).forEach((key) => {
//     console.log(key);
//     console.log(obj[key]);
//   });
// }
// const object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// printAllProperties(object);

function printAllProperties(object1) {
  console.log(Object.entries(object1));
  for (let [key, value] of Object.entries(object1)) {
    console.log(key + ": " + value);
  }
}
const object1 = {
  type: "Fiat",
  model: "500",
  color: "white",
};
printAllProperties(object1);

console.log("--------------6");

// Bài tập 7: Đối tượng lồng nhau
// 1. Tạo một đối tượng "address" biểu diễn địa chỉ của bạn với các thuộc tính: "street" (đường phố), "city" (thành phố) và "zip" (mã bưu điện).
//  Sau đó, thêm đối tượng "address" vào đối tượng "person" từ bài tập trước.

const address = {
  street: "nguyen xien",
  city: "ha noi",
  zip: 118000,
};
person.address = address;
console.log(person);

console.log("--------------7");

// Bài tập 8: Đếm số thuộc tính
// 1. Viết một hàm có tên "countProperties" nhận vào một đối tượng và trả về số lượng thuộc tính của đối tượng đó.
function countProperties(car) {
  return Object.keys(car).length;
}
const cars = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

console.log(countProperties(cars));
// let i = 0;
// let count = 0;
// while (i < keycars.length) {
//   count++;
//   i++;
// }
// console.log(count);

console.log("--------------8");

// Bài tập 9: Duyệt qua tất cả các giá trị
// 1. Viết một hàm có tên "printAllValues" nhận vào một đối tượng và in ra tất cả các giá trị của các thuộc tính trong đối tượng đó.
function printAllValues(object) {
  const keycars = Object.values(myComputer);
  return keycars;
}
const myComputer = {
  type: "laptop",
  brand: "Sony",
  os: "Windows 7",
  graphicCard: "NVIDIA",
};
console.log(printAllValues(myComputer));

console.log("--------------9");

// Bài tập 10: Kiểm tra tính tồn tại
// 1. Viết một hàm có tên "hasProperty" nhận vào một đối tượng và một chuỗi (tên thuộc tính).
// Hàm này sẽ kiểm tra xem thuộc tính có tồn tại trong đối tượng hay không và trả về true nếu có, ngược lại trả về false.

function hasProperty(object, key) {
  return object.hasOwnProperty(key);
}
const student = {
  name: "abc",
  age: 20,
  city: "Hyderabad",
};
const key = "city";
console.log(hasProperty(student, key));
console.log("--------------10");
console.log("--------------10");
console.log("--------------10");
console.log("--------------10");
console.log("--------------10");

const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// function getFullName() {
//   console.log("abc");
// }
const button = document.querySelector("button");
// button.onclick = teacher.getFullName;
// console.log(getFullName);
button.onclick = teacher.getFullName.bind(teacher);
// button.onclick = teacher.getFullName();
// button.onclick = function () {
//   teacher.getFullName();
// };

// button.onclick = teacher.getFullName.bind(teacher);
