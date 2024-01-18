// Bug: nó ám chỉ các lỗi xảy ra trong các đoạn code mà mình viết, hoặc có thể
// bất cứ vấn đề gì làm cho ứng dụng không thể chạy được, hoặc có thể hoạt động sai so với yêu cầu

// Debug: Tìm kiếm những vấn đề gây ra lỗi trong ứng dụng, để mình có
// hướng giải quyết, sửa các lỗi cho ứng dụng (fix bug)

// Printlining: sử dụng các hàm như console.log(), console.table(),...
// Debug Devtool: sử dụng ở trình duyệt. trong tab sourse
// - break point (điểm dừng): khi chương trình gặp cái break point,
// nó sẽ dừng lại tại câu lệnh đó và cho phép bạn kiểm tra giá trị của các biến tại thời điểm dừng.

// console.log(a);
// let a = 5;

const arr = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  const a = 1;
}

function calculateSum(a, b) {
  const sum = a + b;
  return sum;
}
const sum = calculateSum(1, 2);

function tinhGpa(gpa) {
  let a;
  if (5.5 <= gpa && gpa <= 7) {
    a = "kha";
  } else if (7 <= gpa && gpa <= 9) {
    a = "gioi";
  } else {
    a = "dot";
  }
  return a;
}
const gpa = tinhGpa(8);
console.log(gpa);

function divide(a, b) {
  if (b === 0) return "phep tinh sai";
  const divi = a / b;
  return divi;
}
const result = divide(100, 0);

function findLargestElement(arr) {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (max < element) {
      max = element;
    }
  }

  return max;
}
const result2 = findLargestElement([100, 1000, 9999, 873, 32349, 473734]);
