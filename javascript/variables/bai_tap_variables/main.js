// **Bài tập 1: Khai báo và sử dụng biến**
// - Hãy khai báo một biến có tên là **`name`** và gán giá trị "John" cho biến này.
// - In giá trị của biến **`name`** lên màn hình.

const name = "Johns";
console.log(name);

console.log("--------------1");

// **Bài tập 2: Kiểu dữ liệu của biến**
// - Hãy khai báo các biến sau và gán giá trị tương ứng:
// let age = 30;
// let isMale = true;
// let salary = 1000.50;
// let firstName = "Alice";
// Sử dụng hàm typeof để in kiểu dữ liệu của từng biến lên màn hình.

let age = 30;
console.log(typeof age);
let isMale = true;
console.log(typeof isMale);
let salary = 1000.5;
console.log(typeof salary);
let firstName = "Alice";
console.log(typeof firstName);

console.log("--------------2");

// **Bài tập 3: Tính toán với biến và toán tử**
// - Hãy khai báo hai biến **`a`** và **`b`** và gán giá trị bất kỳ cho chúng.
// - Sử dụng các toán tử (+, -, *, /, %) để thực hiện các phép tính sau và in kết quả lên màn hình:
//     - Tổng của **`a`** và **`b`**.
//     - Hiệu của **`a`** và **`b`**.
//     - Tích của **`a`** và **`b`**.
//     - Thương của **`a`** và **`b`**.
//     - Phần dư khi chia **`a`** cho **`b`**.

const a = 25;
const b = 7;
const tong = a + b;
console.log("tong: ", tong);
const hieu = a - b;
console.log("hieu: ", hieu);
const tich = a * b;
console.log("tich: ", tich);
const thuong = a / b;
console.log("thuong: ", thuong);
const du = a % b;
console.log("du: ", du);

console.log("--------------3");

// **Bài tập 4: Chuyển đổi kiểu dữ liệu**
// - Hãy khai báo một biến **`numberString`** và gán giá trị "123" cho biến này dưới dạng chuỗi.
// - Chuyển đổi biến **`numberString`** sang kiểu số nguyên (integer) và gán kết quả vào một biến **`numberInt`**.
// - In kiểu dữ liệu của **`numberInt`** lên màn hình.
const numberString = "123";
const numberInt = parseInt(numberString);
console.log(numberInt);

console.log("--------------4");

// **Bài tập 5: So sánh giá trị của biến**
// - Hãy khai báo hai biến **`x`** và **`y`** và gán giá trị bất kỳ cho chúng.
// - Sử dụng các toán tử so sánh (==, !=, >, <, >=, <=) để so sánh giá trị của **`x`** và **`y`** và in kết quả lên màn hình.
const x = 4;
const y = 1;
const result1 = x == y;
console.log(result1);
const result2 = x != y;
console.log(result2);
const result3 = x > y;
console.log(result3);
const result4 = x < y;
console.log(result4);
const result5 = x >= y;
console.log(result5);
const result6 = x <= y;
console.log(result6);

console.log("--------------5");

// **Bài tập 6: Gán giá trị từ biến này sang biến khác**
// - Hãy khai báo biến **`a`** và gán giá trị 10 cho nó.
// - Sao chép giá trị của **`a`** vào biến **`b`** và in giá trị của **`b`** lên màn hình.
const a1 = 10;
b1 = a1;
console.log(b1);

console.log("--------------6");

// **Bài tập 7: Toán tử logic**
// - Hãy khai báo hai biến **`isStudent`** và **`isWorking`** và gán giá trị **`true`** cho **`isStudent`** và **`false`** cho **`isWorking`**.
// - Sử dụng các toán tử logic (**`&&`**, **`||`**, **`!`**) để kiểm tra các điều kiện sau và in kết quả lên màn hình:
//     - **`isStudent`** và **`isWorking`**.
//     - **`isStudent`** hoặc **`isWorking`**.
//     - Phủ định của **`isStudent`**.

const isStudent = true;
const isWorking = false;
const result7 = isStudent && isWorking;
console.log(result7);
const result7_2 = isStudent || isWorking;
console.log(result7_2);
const result7_3 = !isStudent;
console.log(result7_3);
console.log("--------------7");

// **Bài tập 8: Tạo đối tượng và truy xuất thuộc tính**
// - Hãy tạo một đối tượng **`person`** với các thuộc tính **`name`**, **`age`** và **`gender`**.
// - Gán giá trị tương ứng cho các thuộc tính này.
const person = {
  name: "hien",
  age: 18,
  gender: "nu",
};
console.log(person);
