// **Bài tập 1: Tính tổng hai số**
// Viết một function có tên là `sumOfTwoNumbers` nhận vào hai số nguyên và trả về tổng của chúng.

// Input:
// - Hai số nguyên a và b.
// Output
// - Tổng của hai số a và b.
// Ví dụ:
// sumOfTwoNumbers(3, 5); // Output: 8
// sumOfTwoNumbers(10, -2); // Output: 8

function sumOfTwoNumbers(a, b) {
  return (sum = a + b);
}
const result1 = sumOfTwoNumbers(3, 5);
console.log(result1);
const result1_1 = sumOfTwoNumbers(10, -2);
console.log(result1_1);

// **Bài tập 2: Kiểm tra số chẵn**
// Viết một function có tên là `isEvenNumber` nhận vào một số nguyên và kiểm tra xem số đó có phải là số chẵn hay không.

// Input:
// - Một số nguyên x.
// Output:
// - **`true`** nếu x là số chẵn, **`false`** nếu x là số lẻ.
// Ví dụ:
// isEvenNumber(4); // Output: true
// isEvenNumber(7); // Output: false

function isEvenNumber(number) {
  if (number >= 0 && number % 2 === 0) return true;
  return false;
}
const result = isEvenNumber(9);
console.log(result);

// **Bài tập 3: Tính diện tích hình chữ nhật**
// Viết một function có tên là `calculateRectangleArea` nhận vào chiều dài và chiều rộng của hình chữ nhật và trả về diện tích của nó.
// Input:
// - Chiều dài và chiều rộng của hình chữ nhật.
// Output:
// - Diện tích của hình chữ nhật.
// Ví dụ:
// calculateRectangleArea(4, 6); // Output: 24
// calculateRectangleArea(5, 10); // Output: 50
function calculateRectangleArea(width, height) {
  return width * height;
}
const result3 = calculateRectangleArea(2, 3);
console.log(result3);

// **Bài tập 4: Kiểm tra chuỗi palindrome**
// Viết một function có tên là `isPalindrome` nhận vào một chuỗi và kiểm tra xem chuỗi đó có phải là chuỗi palindrome hay không.
// Chuỗi palindrome là chuỗi mà nếu đọc xuôi hay ngược đều giống nhau.
// Input:
// - Một chuỗi s.
// Output:
// - **`true`** nếu chuỗi s là chuỗi palindrome, **`false`** nếu không phải.
// Ví dụ:
// isPalindrome("level"); // Output: true
// isPalindrome("hello"); // Output: fals
function isPalindrome(string) {
  const str1 = string.split("");
  console.log(str1);
  const str2 = str1.reverse().join("");
  console.log(str2);
  if (string === str2) return true;
  return false;
}
const result4 = isPalindrome("hello");
console.log(result4);

// **Bài tập 5: Tính giai thừa của một số**
// Viết một function có tên là `calculateFactorial` nhận vào một số nguyên dương và trả về giai thừa của số đó.
// Giai thừa của một số nguyên dương n được tính bằng tích của các số từ 1 đến n.
// Input:
// - Một số nguyên dương n.
// Output:
// - Giai thừa của số n.
// Ví dụ:
// calculateFactorial(5); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// calculateFactorial(0); // Output: 1 (0! = 1)
function calculateFactorial(integer) {
  let factorialN = 1;
  if (integer === 0) return 1;
  else if (integer < 0) return;
  for (let i = 1; i <= integer; i++) {
    factorialN = factorialN * i;
  }
  return factorialN;
}
const result5 = calculateFactorial(0);
console.log(result5);

console.log("--------------5");

// Bài tập 5: Tìm ước chung lớn nhất (UCLN) của hai số
// Viết một chương trình yêu cầu người dùng nhập hai số nguyên A và B. Sau đó, sử dụng vòng lặp do-while
// để tính ước chung lớn nhất (UCLN) của A và B và in kết quả lên màn hình.
// Input: A = 12, B = 18
// Output: 6 (UCLN của 12 và 18 là 6)
function TimUcln(num1, num2) {
  let i = 0;
  // let j = 0;
  let ucln;
  do {
    i++;
    if (num1 % i === 0 && num2 % i === 0) {
      ucln = i;
    }
  } while (i < num1);
  return "Ước chung lớn nhất của " + num1 + " và " + num2 + " là " + ucln;
}
console.log(TimUcln(0, 6));
function TimUcln1(a, b) {
  if (a === 0 || b === 0) return a + b;
  const min = a < b ? a : b; //9
  for (let i = min; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
}
console.log(TimUcln1(9, 12));

function TimUcln2(a, b) {
  if (a === 0 || b === 0) return a + b;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
console.log(TimUcln2(10, 12)); // (10,2) (8,2)(6,2)(4,2)(2,2)
console.log(TimUcln2(30, 48)); //(30,18) (12,18) (12,6) (6,6)

// **Bài tập 6: Kiểm tra số nguyên tố**
// Viết một function có tên là `isPrimeNumber` nhận vào một số nguyên dương và kiểm tra xem số đó có phải là số nguyên tố hay không.
// Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
// Input:
// - Một số nguyên dương n.
// Output:
// - **`true`** nếu n là số nguyên tố, **`false`** nếu không phải.
// Ví dụ:
// isPrimeNumber(7); // Output: true
// isPrimeNumber(4); // Output: false
function isPrimeNumber(number) {
  if (number < 2) return false;
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(isPrimeNumber(4));

console.log("--------------6");

// Bài tập 7: In tam giác sao
// Viết một chương trình yêu cầu người dùng nhập một số nguyên N. Sau đó, sử dụng vòng lặp for để in ra một tam giác sao có độ cao là N trên màn hình.
// Input: 4
// Output:
// *
// **
// ***
// ****
function printTrianglePattern(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
console.log(printTrianglePattern(6));

console.log("--------------7");
// *****
// *****
// *****
// *****
// *****
function printTrianglePattern1(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
console.log(printTrianglePattern1(5));
console.log("--------------7");
// *****
// *   *
// *   *
// *   *
// *****
//
console.log("--------------7");

//     *
//    **
//   ***
//  ****
// *****
function printTrianglePattern10(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
}
console.log(printTrianglePattern10(5));

console.log("--------------7");

// Bài tập 8: In bảng cửu chương
// Viết một chương trình sử dụng hai vòng lặp for lồng nhau để in ra bảng cửu chương từ 1 đến 10 trên màn hình.

function printMultiplication() {
  for (let i = 1; i <= 10; i++) {
    console.log("bang cuu chuong", i);
    for (let j = 1; j <= 10; j++) {
      console.log(i + "*" + j + " =", i * j);
    }
  }
}
console.log(printMultiplication());

console.log("--------------8");

// Bài tập 9: Tìm số lớn nhất trong mảng
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên. Sau đó, sử dụng vòng lặp for hoặc while
// để tìm số lớn nhất trong mảng và in kết quả lên màn hình.
// Input: [4, 7, 2, 9, 5]
// Output: Số lớn nhất trong mảng là 9
array = [4, 7, 2, 9, 5];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Số lớn nhất trong mảng là ", max);
console.log("--------------9");

// Bài tập 10: Tìm số nhỏ nhất trong mảng
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên. Sau đó, sử dụng vòng lặp for hoặc while
//  để tìm số nhỏ nhất trong mảng và in kết quả lên màn hình.
function findMinNumber(array) {
  let i = 0;
  let min = array[0];
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return "so nho nhat trong mang la " + min;
}
console.log(findMinNumber([4, 7, 2, 9, 5]));

console.log("--------------10");

// Bài tập 11: Tính tổng các số trong mảng
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên. Sau đó, sử dụng vòng lặp for hoặc while
// để tính tổng các số trong mảng và in kết quả lên màn hình.

// Input: [4, 7, 2, 9, 5]
// Output: Tổng các số trong mảng là 27 (4 + 7 + 2 + 9 + 5 = 27)

function sunArray(array) {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return "Tổng các số trong mảng là " + sum;
}
console.log(sunArray([4, 7, 2, 9, 5]));

console.log("--------------11");

// Bài tập 12: Tìm số lần xuất hiện của một số trong mảng
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên và một số nguyên N. Sau đó, sử dụng vòng lặp for hoặc while
// để tìm số lần xuất hiện của N trong mảng và in kết quả lên màn hình.
// Input: Mảng = [2, 4, 7, 4, 2, 9], N = 4
// Output: Số 4 xuất hiện 2 lần trong mảng.
function countNumber(array, num) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      count += 1;
    }
  }
  return "Số " + num + " xuất hiện " + count + " lần trong mảng.";
}
console.log(countNumber([4, 4, 4, 44, 2, 9], 4));

console.log("--------------12");
// Bài tập 13: Sắp xếp mảng tăng dần
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên. Sau đó, sử dụng vòng lặp for hoặc while
// để sắp xếp mảng theo thứ tự tăng dần và in kết quả lên màn hình.
// Input: [5, 2, 9, 1, 5]
// Output: Mảng sau khi sắp xếp: [1, 2, 5, 5, 9]
function sortArray1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(sortArray1([5, 2, 9, 1, 5]));
console.log("--------------13");
// Bài tập 14: Kiểm tra mảng có chứa số chẵn hay không
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên. Sau đó, sử dụng vòng lặp for hoặc while
// để kiểm tra xem mảng có chứa số chẵn hay không và in kết quả lên màn hình.
// Input: [3, 5, 8, 9, 4]
// Output: Mảng chứa số chẵn.
function containsEvenNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      return "mang chua so chan";
    }
  }
  return "mang khong chua so chan";
}
console.log(containsEvenNumber([3, 5, 13, 9, 11]));

console.log("--------------14");
// Bài tập 15: Tính trung bình cộng các số trong mảng
// Viết một chương trình yêu cầu người dùng nhập một mảng các số nguyên. Sau đó, sử dụng vòng lặp for hoặc while
// để tính trung bình cộng các số trong mảng và in kết quả lên màn hình.
// Input: [3, 6, 1, 9, 2]
// Output: Trung bình cộng của các số trong mảng là 4.2 (tính theo dạng số thập phân)
function averageArray(array) {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  const average = sum / array.length;
  return "Trung bình cộng của các số trong mảng là " + average;
}
console.log(averageArray([3, 6, 1, 9, 2]));

console.log("--------------15");
