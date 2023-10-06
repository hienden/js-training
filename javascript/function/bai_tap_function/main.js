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

console.log("--------------1");

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

console.log("--------------2");

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

console.log("--------------3");

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

console.log("--------------4");

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
console.log(isPrimeNumber(7));

console.log("--------------6");

// **Bài tập 7: Đảo ngược chuỗi**
// Viết một function có tên là `reverseString` nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.
// Input:
// - Một chuỗi s.
// Output:
// - Chuỗi đảo ngược của s.
// Ví dụ:
// reverseString("hello"); // Output: "olleh"
// reverseString("javascript"); // Output: "tpircsavaj"

function reverseString(str) {
  const string1 = str.split("");
  const reverseStr = string1.reverse();
  return reverseStr.join("");
}
console.log(reverseString("Hello"));

console.log("--------------7");

// Bài tập 8: Tìm số lớn nhất trong mảng
// Viết một function có tên là findMaxNumber nhận vào một mảng các số nguyên và trả về số lớn nhất trong mảng.
// findMaxNumber([3, 6, 2, 9, 5]); // Output: 9
// findMaxNumber([10, 7, 2, -1, 8]); // Output: 10

function findMaxNumber(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMaxNumber([10, 7, 2, -1, 8]));

console.log("--------------8");

// **Bài tập 9: Tìm số nhỏ nhất trong mảng**
// Viết một function có tên là `findMinNumber` nhận vào một mảng các số nguyên và trả về số nhỏ nhất trong mảng.
// findMinNumber([3, 6, 2, 9, 5]); // Output: 2
// findMinNumber([10, 7, 2, -1, 8]); // Output: -1

function findMinNumber(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log(findMinNumber([10, 7, 2, -1, 8]));

console.log("--------------9");

// **Bài tập 10: Tính tổng các số trong mảng**
// Viết một function có tên là `calculateSumOfNumbers` nhận vào một mảng các số nguyên và trả về tổng của các số trong mảng.
// calculateSumOfNumbers([3, 6, 2, 9, 5]); // Output: 25 (3 + 6 + 2 + 9 + 5 = 25)
// calculateSumOfNumbers([10, 7, 2, -1, 8]); // Output: 26 (10 + 7 + 2 + -1 + 8 = 26)
function calculateSumOfNumbers(array) {
  const totalArray = array.reduce(function (total, number) {
    return total + number;
  });
  return totalArray;
}
console.log(calculateSumOfNumbers([3, 6, 2, 9, 5]));

console.log("--------------10");

// Bài tập 11: Kiểm tra mảng có chứa số chẵn hay không
// Viết một function có tên là containsEvenNumber nhận vào một mảng các số nguyên và kiểm tra xem mảng đó có chứa số chẵn hay không.
// containsEvenNumber([3, 6, 2, 9, 5]); // Output: true
// containsEvenNumber([9, 15, 21, 27, 5]); // Output: false

function containsEvenNumber(array) {
  return array.some(function (element) {
    return element % 2 === 0;
  });
}
console.log(containsEvenNumber([9, 15, 21, 27, 2]));

console.log("--------------11");

// Bài tập 12: Tính trung bình cộng các số trong mảng
// Viết một function có tên là calculateAverage nhận vào một mảng các số nguyên và trả về trung bình cộng của các số trong mảng.
// calculateAverage([3, 6, 2, 9, 5]); // Output: 5 (tính theo dạng số thập phân)
// calculateAverage([10, 7, 2, -1, 8]); // Output: 5.2 (tính theo dạng số thập phân)

function calculateAverage(array) {
  let sum = array.reduce(function (total, num) {
    return total + num;
  });
  return sum / array.length;
}
console.log(calculateAverage([10, 7, 2, -1, 8]));

console.log("--------------12");

// Bài tập 13: Đếm số lượng số lẻ trong mảng
// Viết một function có tên là countOddNumbers nhận vào một mảng các số nguyên và trả về số lượng số lẻ trong mảng.
// countOddNumbers([3, 6, 2, 9, 5]); // Output: 3 (có 3 số lẻ: 3, 9, 5)
// countOddNumbers([10, 7, 2, -1, 8]); // Output: 1 (chỉ có số -1 là lẻ)
function countOddNumbers(array) {
  let count = 0;
  array.forEach(function (num) {
    if (num % 2 !== 0) {
      count += 1;
    }
  });
  return count;
}
console.log(countOddNumbers([10, 7, -2, -1, 8]));

console.log("--------------13");

// Bài tập 14: Kiểm tra mảng có chứa số âm hay không
// Viết một function có tên là containsNegativeNumber nhận vào một mảng các số nguyên và kiểm tra xem mảng đó có chứa số âm hay không.
// containsNegativeNumber([3, 6, 2, 9, 5]); // Output: false
// containsNegativeNumber([10, 7, -2, -1, 8]); // Output: true
function containsNegativeNumber(array) {
  return array.some(function (element) {
    return element < 0;
  });
}
console.log(containsNegativeNumber([10, 7, -2, -1, 8]));

// Bài tập 15: Sắp xếp mảng tăng dần
// Viết một function có tên là sortAscending nhận vào một mảng các số nguyên và trả về mảng đã được sắp xếp theo thứ tự tăng dần.
// sortAscending([3, 6, 2, 9, 5]); // Output: [2, 3, 5, 6, 9]
// sortAscending([10, 7, -2, -1, 8]); // Output: [-2, -1, 7, 8, 10]
function sortAscending(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}
console.log(sortAscending([3, 6, 20, 9, 5]));
