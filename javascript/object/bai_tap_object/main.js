// **Bài tập 1: Tạo đối tượng**

// 1. Tạo một đối tượng có tên "person" biểu diễn thông tin cá nhân của bạn, bao gồm các thuộc tính: "name" (tên), "age" (tuổi),
// "gender" (giới tính), và "occupation" (nghề nghiệp).

const person = {
  name: "hiền",
  age: 18,
  gender: "female",
  occupation: "business online",
};

// **Bài tập 2: Truy xuất thuộc tính**
// 1. Sử dụng đối tượng "person" từ bài tập trước để truy xuất và in ra màn hình giá trị thuộc tính "name" và "age".
console.log(person.name);
console.log(person.age);

// **Bài tập 3: Thay đổi giá trị thuộc tính**
// 1. Thay đổi giá trị của thuộc tính "occupation" trong đối tượng "person" thành nghề nghiệp mới của bạn.
person.occupation = "student";
console.log(person);

// **Bài tập 4: Thêm thuộc tính mới**
// 1. Thêm một thuộc tính "email" vào đối tượng "person" để đại diện cho địa chỉ email của bạn.
person.email = "hoanghien@gmail.com";
console.log(person);

// **Bài tập 5: Xóa thuộc tính**
// 1. Xóa thuộc tính "gender" khỏi đối tượng "person".
delete person.gender;
console.log(person);

console.log("---------------------------------------");

// **Bài tập 6: Duyệt qua tất cả các thuộc tính**
// 1. thêm mothod "printAllProperties" cho đối tượng person và in ra tất cả các thuộc tính và giá trị của đối tượng đó.
person.printAllProperties = function () {
  const keyss = Object.keys(this);
  const valuess = Object.values(this);
  return { keyss, valuess };
  // return { khoa: keys, giaTri: values };
  // console.log(keys, values);
};
const result = person.printAllProperties();
console.log(result);

console.log("---------------------------------------");

// **Bài tập 7: Đối tượng lồng nhau**
// 1. Tạo một đối tượng "address" biểu diễn địa chỉ của bạn với các thuộc tính: "street" (đường phố), "city" (thành phố)
//  và "zip" (mã bưu điện). Sau đó, thêm đối tượng "address" vào đối tượng "person" từ bài tập trước.

// person.address = {
//   street: "nguyễn xiển",
//   city: "hà nội",
//   zip: "0012",
// };
// console.log(person);

z = {
  street: "nguyễn xiển",
  city: "hà nội",
  zip: "0012",
};
person.address = z;
console.log(person);

console.log("---------------------------------------");

// **Bài tập 8: Đếm số thuộc tính**
// 1. Viết một hàm có tên "countProperties" nhận vào một đối tượng và trả về số lượng thuộc tính của đối tượng đó.

function countProperties(object) {
  const keys = Object.keys(object).length;
  return keys;
}
person1 = {
  name: "Anna",
  age: 18,
  address: "thai binh",
  address2: "thai binh",
  name1: "Anna",
};
const result8 = countProperties(person1);
console.log(result8);

// **Bài tập 9: Duyệt qua tất cả các giá trị**
// 1. Viết một hàm có tên "printAllValues" nhận vào một đối tượng và in ra tất cả các giá trị của các thuộc tính trong đối tượng đó.

function printAllValues(object) {
  console.log(Object.values(object));
}
const car = {
  name: "BMW",
  color: "black",
  weight: 400,
};
printAllValues(car);
// **Bài tập 10: Kiểm tra tính tồn tại**
// 1. Viết một hàm có tên "hasProperty" nhận vào một đối tượng và một chuỗi (tên thuộc tính). Hàm này sẽ kiểm tra xem thuộc tính có tồn tại trong đối tượng hay không và
// trả về true nếu có, ngược lại trả về false.
// function hasProperty(object, string) {
//   const keys = Object.keys(object);
//   const isDisplay = keys.some(function (key) {
//     return key === string;
//   });
//   return isDisplay;
// }
function hasProperty(object, string) {
  const isExist = object.hasOwnProperty(string);
  return isExist;
}
const car1 = {
  name: "BMW",
  color: "black",
  weight: 400,
};
const result10 = hasProperty(car1, "color");
console.log(result10);
