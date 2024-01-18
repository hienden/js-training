// class: là 1 bản thiết kế để xây dựng nên các đối tượng (object)
// object: là 1 thực thể ví dụ như: con người, xe, nhà,...

// class và obj còn gọi là lập trình hướng đối tượng(oop) =? tìm hiểu thêm

// syntax: class ten_class {} -> chú ý ten_class phải đặt là danh từ (Person, Car, ...)

// khuyến nghị chữ cái bắt đầu nên bắt đầu bằng chữ viết hoa

// contructor(): là 1 method đặc biệt, nó sẽ chạy tự động khi 1 đối
// tượng được khởi tạo (new Person)

class Person {
  firstName; // property: tên thuộc tính của bản thiết kế
  lastName;
  age;
  gender;

  // method
  getFullName(firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
    console.log(this.firstName);
    return this.firstName + " " + this.lastName;
  }
}
const hien = new Person();
hien.firstName = "hien";
hien.lastName = "hoang";
hien.age = 27;
hien.gender = "nu";

console.log("hien", hien.firstName);
console.log("hien", hien.lastName);
console.log("hien", hien.age);
console.log("hien", hien.gender);
console.log("hien", hien.getFullName());

const hieu = new Person();
hieu.firstName = "hieu";
hieu.lastName = "pham";
hieu.age = 27;
hieu.gender = "nam";

console.log("hieu", hieu.firstName);
console.log("hieu", hieu.lastName);
console.log("hieu", hieu.age);
console.log("hieu", hieu.gender);

const tho = new Person();
tho.firstName = "tho";
tho.lastName = "bui";
tho.age = 27;
tho.gender = "nam";

console.log("tho", tho.firstName);
console.log("tho", tho.lastName);
console.log("tho", tho.age);
console.log("tho", tho.gender);
