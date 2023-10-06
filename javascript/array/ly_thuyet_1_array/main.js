// Array (mảng): là kiểu dữ liệu đặc biệt có thể lưu trữ được nhiều giá trị
// cú pháp của array => const ten_array = [data,...]
// các gí trị trong 1 array sẽ gọi là 1 element

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["tho", "hieu", "hien"];
const books = [
  { name: "tuoi tho du doi", author: "nguyen nhat anh" },
  { name: "harry porter", author: "thobui" },
];
const mixed = [1, "tho", true, { name: "hieu" }, null, [1, 2, 3]];

// truy cập phần tử trong 1 mảng (cú pháp array[index] => index là vị trí
// của phần tử trong mảng)
// index sẽ bắt đầu tử vị trí 0=>...
const book2 = books[1];
console.log(books);
console.log(book2.name, book2.author);

// cập nhật giá trị của 1 phần tử trong mảng
console.log("trước khi cập nhật: ", numbers);
numbers[2] = 100;
console.log("sau khi cập nhật: ", numbers);

books[1]["author"] = "hienhoang";
console.log(books);

// or
// books[1].author = "hienhoang";
// console.log(books);

// thêm 1 phần tử mới vào mảng
names[3] = "cuong";
console.log(names);

// length: trả về số lượng phần tử trong 1 array
console.log(numbers.length);
console.log(books.length);

// thêm 1 phần tử vào 1 mảng
numbers.push(1000, 24, 3223, 33434); // thêm mới 1 or nhiều giá trị vào cuối màng
console.log(numbers);

names.unshift("hoa", "hong", "chinh"); // thêm mới 1 hoặc nhiều phần tử vào đầu mảng
console.log(names);

// convert 1 mảng thảnh 1 string
console.log(numbers.toString());

// pop : lấy ra phần tử cuối cùng của mảng
console.log(books.pop());

// shift: lấy ra phần tử đầu tiên của mảng
console.log(books.shift());

// join: toàn bộ các phần tử gộp vào thành 1 string (ngược lại với split)
console.log(numbers.join());
console.log(numbers.join("-"));
console.log(numbers.join(" "));
console.log(numbers.join(""));

// concat: gộp 2 mảng thành 1 mảng duy nhất
const array1 = [1, 23, 3];
const array2 = [34, 5, 5, 3434, 23];
const newArray = array1.concat(array2);
console.log(newArray);
console.log(array1);

// flat: [[123,232,2,323]] => [123,232,2,323]
console.log([[123]].flat());
console.log([[[123]]].flat()); // [[123]]

// splice(): thêm hoặc xóa các phần tử trong 1 mảng
// syntax: splice(index, howmany, item1, ...)
// index: chỉ mục của phần tử add/remove
// howmany: số lượng phần tử cần xóa (tùy chọn)
// item1,..: phần tử mới sẽ được thêm vào mảng (tùy chọn)

const fruits = ["orange", "apple", "banana", "mango"];
// fruits.splice(2, 0, "lemon", "kiwi");
// console.log(fruits); // ['orange', 'apple', 'lemon', 'kiwi', 'banana', 'mango']

// fruits.splice(2, 2);
// console.log(fruits); //['orange', 'apple', 'banana', 'mango']

// fruits.splice(1);
// console.log(fruits);

// slice : trả về mảng mới các phần tử được lựa chọn theo index
// syntax => slice(start, end)
// start: vị trí của index muốn bắt đầu
// end: vị trí của index muốn kết thúc
console.log(fruits);
const newFruits = fruits.slice(0, 2);
console.log(newFruits);

console.log("---------------------");
console.log("---------------------");
// **Bài tập 8: Đếm số thuộc tính**
// 1. Viết một hàm có tên "countProperties" nhận vào một đối tượng và trả về số lượng thuộc tính của đối tượng đó.

function countProperties(object) {
  const keys = Object.keys(object).length;
  return keys;
}
person = {
  name: "Anna",
  age: 18,
  address: "thai binh",
  address2: "thai binh",
  name1: "Anna",
};
const result = countProperties(person);
console.log(result);
