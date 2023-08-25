//Number
// number trong js có thể biểu diễn được số nguyên hoặc số thực
const intValue = 12;
const floatValue = 12.1234;

//Trong javascript, bạn có thể viết các số rất lớn hoặc rất nhỏ bằng cách sử dụng kí hiệu khoa học (dạng mũ):
let largeNumber = 3.2e6; //3.2 x 10^6 = 3200000 (3.2 triệu)
console.log(largeNumber);
let smallNumber = 5.2e-3; // 5.2 x 10^-3 = 0.0052
console.log(smallNumber);

// - Số nguyên (các số không có dấu chấm hoặc ký hiệu mũ) là chính xác đến 15 chữ số.
// - Trong Javascript, các số nguyên là những số không có phần thập phân hoặc ký hiệu mũ. Đối với số nguyên trong Javascript,
//  chúng ta có thể tin rằng chúng là chính xác đến 15 chữ số

// Toán tử dấu chấm động (floating point arithmetic) luôn không chính xác 100%.
let x = 0.1 + 0.2; // Kết quả không chính xác là 0.30000000000000004 (Điều này là do hệ thống biểu diễn số thực bằng nhị phân
// không thể đại diện chính xác cho 0.1 và 0.2)
console.log(x);

// Khắc phục
let y = (0.1 * 10 + 0.2 * 10) / 10;
console.log(y);
let z = (0.2 + 0.1).toFixed(1); // là tròn sau dấu . một chữ số
console.log(z);

// Adding Numbers and strings
// Phép cộng ưu tiên nối chuỗi nếu 1 trong 1 biến được gán kiểu chuỗi.
// Các phép còn lại thì cộng như phép toán bình thường
const a = 100;
const b = "120";

console.log(a + b); //100120

const c = "130";
const d = "140";
console.log(c + d); // 130140

console.log(c - d); // -10

// Javascript Number Method
const f = (123).toString();
console.log(f); // 123 => kiểu string
const g = (123.486789).toFixed(1);
console.log(g); // 123.5

// convert to number
const h = "3000.23";
const convertToNumber1 = Number(h); // 3000.23
console.log(convertToNumber1);
const convertToNumber2 = parseInt(h); // 3000 : Kiểu integer
console.log(convertToNumber2);
// or
const convertToNumber2_1 = Number.parseInt(h); // Sử dụng Number.
console.log(convertToNumber2_1);
const convertToNumber3 = parseFloat(h); // 3000.23 : Kiểu thập phân/ float
console.log(convertToNumber3);

// Kiểm tra 1 số có phải số nguyên không
const isInt = Number.isInteger(12.3); // false
console.log(isInt);

console.log(Number.MAX_VALUE); // In ra giá trị lớn nhất
console.log(Number.MIN_VALUE); // In ra giá trị nhỏ nhất

// Math: Thư viện toán học
const PI = Math.PI;
console.log("PI", PI);

// phép mũ
const pow = Math.pow(12, 2); // 12^2
console.log(pow);

const abs = Math.abs(-12); // giá trị tuyệt đối
console.log(abs);

const floor = Math.floor(15.2); // làm tròn xuống

const ceil = Math.ceil(15.2); // làm tròn lên

const round = Math.round(18.5); // làm tròn theo quy tắc

const random = Math.random(); // tạo 1 số ngẫu nhiên từ 0 đến 1
console.log(random);

const max = Math.max(12, 19, 8, 25); // Tìm số lớn nhất

const min = Math.min(12, 1, 8, 25); // Tìm số nhỏ nhất

// Bài tập: tạo 1 function sẽ trả về con số ngẫu nhiên từ 1 đến 6
function getRandomNumber() {
  const random = Math.round(Math.random() * 6);
  return random;
}
const result = getRandomNumber();
console.log(result);
