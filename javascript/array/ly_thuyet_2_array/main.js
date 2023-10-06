// sort dùng để sắp xếp các phần tử trong 1 mảng
const fruits = ["orange", "apple", "abc", "banana", "mango"];
console.log(fruits.sort());
console.log("mảng được sắp xếp z-a", fruits.reverse()); // Đảo ngược các phần tử trong 1 mảng

const numbers1 = [1000, 33, 3424, 12, 1, 0];

// return prev - next sắp xếp theo chiều tăng dần
// return next - prev sắp xếp theo chiều giảm dần

const incrementNumbers = numbers1.sort(function (prev, next) {
  return prev - next;
});

console.log("mảng được sắp xếp tăng dần 1,2,3", incrementNumbers);
console.log("mảng được sắp xếp tăng dần 9,8,7", numbers1.reverse());

// Bài tập
// Tạo  function
//  -> Nhận vào tham số là mảng chưa được sắp xếp
//  -> Trả về mảng đã được sắp xếp
// Tên sortedByYear Sắp xếp cars theo năm tăng dần
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "TOYOTA", year: 2034 },
  { type: "suzuki", year: 2023 },
];

function sortedByYear(arr) {
  const compareFunc = function (a, b) {
    return a.year - b.year;
  };
  return arr.sort(compareFunc);
}
console.log(sortedByYear(cars));

// Function tên sortedByType Sắp xếp cars theo type tăng dần
function sortedByType(arr) {
  const compareFunc = function (a, b) {
    return a.type.toLowerCase().localeCompare(b.type.toLowerCase());
  };
  return arr.sort(compareFunc);
}
console.log(sortedByType(cars));

// Bài tập 1: Đảo ngược chuỗi
// Viết một hàm có tên "reverseString" nhận vào một chuỗi và
//  trả về chuỗi đảo ngược của nó.

// Input: "Hello"
// Output: "olleH"

function reverseString(string) {
  const a = string.split("");
  console.log(a);
  return a.reverse().join("");
}
console.log(reverseString("Hello"));
