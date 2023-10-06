// if statement: sử dụng lệnh if để chỉ định một khối mã sẽ
// thực thi điều kiện của nó là đúng
// syntax: if (condition) {// đoạn code thực thi}
const number = 10;
if (number > 11) {
  console.log("so lon hon 11");
} else {
  console.log("so nho hon 11");
}

/**
 * if(condition1){
 *   ...code
 * } else if (condition2) {
 *  ...code
 * } else {
 * ...code
 * }
 */

const a = "hello1";
if (a === "xin chao") {
  console.log(a);
} else if (a === "hello") {
  console.log(a);
} else {
  console.log("Không bằng...");
}

// if... else có thể lồng nhau
const b = 30;
if (b === 5) {
  console.log("b bằng 5");
  if (b > 3) {
    console.log("b có lớn hơn 3");
  } else {
    console.log("b nhỏ hơn 3");
  }
} else {
  console.log("b không bằng 5");
  if (b < 2) {
    console.log("b có nhỏ hơn 2");
  } else {
    console.log("b có lớn hơn 2");
  }
}
// sử dụng kết hợp với logic operator (&&, ||, !)
if (b > 50 && b < 60) {
  console.log("điều kiện thỏa mãn &&");
}

if (b > 50 || b > 40) {
  console.log("điều kiện thỏa mãn ||");
}

// ! Dấu phủ định điều kiện, ví dụ: !true => false
const isLogged = false;
if (!isLogged) {
  console.log("bạn phải đăng nhập đi");
}
// tạo 1 function có chức năng kiểm tra Tính chỉ số BMI
// function nhận vào 2 tham số chiều cao, cân nặng
// công thức tính BMI = cân nặng /(chiều cao x chiều cao)
// Hiển thị kết quả nếu:
// - BMI < 18.5 => hiển thị người này là nhẹ cân
// - 18.5 <= BMI <= 24.9 => hiển thị người này là bình thường
// - 25 <= BMI <= 29.9 => hiển thị người này là thừa cân
// - 30 <= BMI <= 34.9 => hiển thị người này là béo phì độ 1
// - BMI > 35 => hiển thị người này là béo phì độ 2

function checkBmi(height, weight) {
  let cal = weight / (height * height);
  if (cal < 18.5) {
    console.log("người này là nhẹ cân");
  } else if (18.5 <= cal <= 24.9) {
    console.log("người này là bình thường");
  } else if (25 <= cal <= 29.9) {
    console.log("người này là thừa cân");
  } else if (30 <= cal <= 34.9) {
    console.log("người này là béo phì độ 1");
  } else {
    console.log("người này là béo phì độ 2");
  }
}
checkBmi(1.63, 80);

// ternary operator
// syntax: condition ? ...code : ...code
// nên sử dụng khi mà ít điều kiện

b > 20
  ? console.log("ternary operator thỏa nãm")
  : console.log("ternary operator không thỏa mãn");

const tmp = b === 30 ? 50 : 60;
console.log("temp:", tmp);

//---------------
// switch... case statement
// syntax
/**
switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  // and so on...
  default:
    // Code to be executed if expression does not match any case
}
*/

// Đây là cách nó hoạt động:

// - Biểu thức trong câu lệnh switch được tính toán một lần.
// - Giá trị của biểu thức được so sánh với các giá trị trong mỗi trường hợp (case).
// - Nếu có trùng khớp, khối mã tương ứng sẽ được thực thi.
// - Nếu không có trùng khớp, khối mã mặc định sẽ được thực thi.

// break: là 1 keyword trong js dùng để thoát khỏi câu lệnh switch

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Today is a different day");
}

// tạo 1 function kiểm tra học lực
// function này nhận vào tham số xếp loại học lực (a,b,c,,,)
// Hiển thị kết quả:
// - Nếu học lực đạt loại A thì là xuất sắc
// - Nếu học lực đạt loại B thì là giỏi
// - Nếu học lực đạt loại c thì là khá
// - Nếu học lực đạt loại D thì là yếu
// - Nếu học lực đạt loại E thì là kém

function checkCapacity(GPA) {
  switch (GPA) {
    case "A":
      console.log("xuất sắc");
      break;
    case "B":
      console.log("giỏi");
      break;
    case "C":
      console.log("khá");
      break;
    case "D":
      console.log("yếu");
      break;
    case "E":
      console.log("kém");
      break;
    default:
      console.log("khong du dieu kien");
  }
}
checkCapacity("A");
