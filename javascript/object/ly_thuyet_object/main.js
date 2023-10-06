// Object là 1 trong những kiểu dự liệu quan trọng trong Javascrpit
// - Dùng dể thể hiện 1 đối tượng nào đó thông qua các thuộc tính và hành động
// - Các thuộc tính và hành động này được thể hiện qua các cặp từ khóa key và giá trị value

// objects (đối tượng) là kiểu dữ liệu cơ bản và quan trọng của js
// objects sẽ tổ chức dữ liệu theo cặp key và value

// cú pháp của object sẽ biểu diễn bằng cặp dấu {}
// cú pháp => const ten_doi_tuong = { key:value,....}
// 1 object luôn khai báo với keyword là const

const car = {
  name: "honda",
  year: 2022,
  color: "black",
  author: {
    name: "hieu",
    age: 100,
  },
}; // là 1 object

// truy cập giá trị của 1 properties
// cách 1: dot notation (sử dụng dấu .)
console.log(car.name);
console.log(car.year);
console.log(car.author.name);
// cách 2: bracket (dấu [])
console.log(car["year"]);
console.log(car["author"]["age"]);

// cách 3: kết hợp cả 2 cách trên
console.log(car["author"].age);

// cập nhật giá trị của 1 properties (thuộc tính biểu diễn bằng key - value)
car.name = "yamaha";
console.log(car.name);

car.author.name = "hien";
console.log(car.author.name);

// thêm 1 thuộc tính cho object
console.log("trước khi thêm thuộc tính width", car.width);
car.width = 1000;
console.log("trước khi thêm thuộc tính width", car.width);

// xóa 1 thuộc tính của đối tượng
// delete car.color;
// console.log("thuộc tính sau khi xóa", car.color);
// delete car.author.age;
// console.log(car.author.age);

// object methods
console.log(Object.keys(car.author)); // lấy ra danh sách các keys của đối tượng

console.log(Object.values(car)); // lấy ra danh sách các values của đối tượng

// method trong 1 object
// // gọi function thông thường
// function getFullName() {}

const person = {
  firstName: "hieu",
  lastName: "pham",
  age: 27,
  printFullName: function () {
    //body....
    console.log(
      "tôi tên là: " + this.firstName + " " + this.lastName + " " + this.age
    );
  },
  getName: function (gender) {
    console.log(this);
    return this.firstName + " " + gender;
  },
};
person.printFullName();
const firstName1 = person.getName("nu");
const firstName2 = person.getName("nam");
console.log(firstName1);
console.log(firstName2);

// keyword this
// trong 1 object this sẽ đại diện cho object đó
// person.name <-> this.name (this chỉ sử dụng trong object đó)
console.log(this);
