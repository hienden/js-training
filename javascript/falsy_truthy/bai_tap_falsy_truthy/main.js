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
function isPrimeNumber(number) {}
