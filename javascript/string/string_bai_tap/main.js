// a = "Hello";
// console.log(a.split(""));

// Bài tập 1: Đảo ngược chuỗi
// Viết một hàm có tên "reverseString" nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.
// Ví dụ:
// Input: "Hello"
// Output: "olleH"

function reverseString(str) {
  const string1 = str.split("");
  const reverseStr = string1.reverse();
  return reverseStr.join("");
}
const result1 = reverseString("Hello");
console.log(result1);

// Bài tập 2: Kiểm tra chuỗi đối xứng
// Viết một hàm có tên "isPalindrome" nhận vào một chuỗi và trả về true nếu chuỗi là đối xứng (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều giống nhau), ngược lại trả về false.
// Ví dụ:
// Input: "radar"
// Output: true
function isPalindrome(str) {
  const string2 = str.split("");
  const reverseStr2 = string2.reverse().join("");
  console.log(reverseStr2);
  if (str === reverseStr2) return true;
  return false;
}
const result2 = isPalindrome("level");
console.log(result2);

// Bài tập 3: Đếm số lượng từ
// Viết một hàm có tên "countWords" nhận vào một chuỗi và trả về số lượng từ trong chuỗi đó. Cho rằng các từ cách nhau bởi khoảng trắng.
// countWords("Hello world"); // Output: 2
// countWords("This is a sample sentence."); // Output: 5
function countWords(str) {
  return str.split(" ").length;
}
const result3 = countWords("This is a sample sentence.");
console.log(result3);

// **Bài tập 4: Viết hoa chữ cái đầu tiên của từ**
// Viết một hàm có tên "capitalizeFirstLetter" nhận vào một chuỗi và trả về chuỗi mới với chữ cái đầu tiên của mỗi từ được viết hoa.
// capitalizeFirstLetter("hello world"); // Output: "Hello World"
// capitalizeFirstLetter("this is a test"); // Output: "This Is A Test"

function firstCase(letter) {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
}
function capitalizeFirstLetter(string, callback) {
  const arrString = string.split(" ");
  console.log(arrString);
  const newArr = arrString.map(function (a) {
    return callback(a);
  });
  return newArr.join(" ");
}
console.log(capitalizeFirstLetter("hello world", firstCase));

// Bài tập 5: Tách chuỗi thành mảng các từ
// Viết một hàm có tên "splitWords" nhận vào một chuỗi và trả về một mảng chứa các từ của chuỗi đó.
// splitWords("Hello world"); // Output: ["Hello", "world"]
// splitWords("This is a sample sentence."); // Output: ["This", "is", "a", "sample", "sentence."]

function splitWords(string) {
  return string.split(" ");
}
console.log(splitWords("This is a sample sentence."));

// Bài tập 6: Loại bỏ khoảng trắng thừa
// Viết một hàm có tên "trimWhitespace" nhận vào một chuỗi và trả về chuỗi mới đã loại bỏ các khoảng trắng thừa ở đầu và cuối chuỗi.
// trimWhitespace("   Hello world   "); // Output: "Hello world"
// trimWhitespace("  This is a sample sentence.   "); // Output: "This is a sample sentence."

function trimWhitespace(string) {
  return string.trim();
}
console.log(trimWhitespace("   Hello world   "));

// Bài tập 7: Đếm số lần xuất hiện của một từ
// Viết một hàm có tên "countOccurrences" nhận vào một chuỗi và một từ. Hàm này sẽ trả về số lần xuất hiện của từ trong chuỗi.
// countOccurrences("Hello hello world", "hello"); // Output: 2
// countOccurrences("This is a test sentence.", "test"); // Output: 1
// function countOccurrences(string, word) {
//   const newString_1 = string.split(" ");
//   console.log(newString_1);
//   const newString_2 = newString_1.filter(function (str) {
//     return str.toUpperCase() === word.toUpperCase();
//   });
//   return newString_2.length;
// }
// console.log(
//   countOccurrences("Hello hello world hello hello hello hello", "hello")
// );

// function countOccurrences(str, word) {
//   let count = 0;
//   const newString = str.toUpperCase().split(" ");
//   for (let i = 0; i < newString.length; i++) {
//     if (newString[i] === word.toUpperCase()) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// console.log(
//   countOccurrences("Hello hello world hello hello hello hello", "hello")
// );
console.log("----------------------");
function countOccurrences(str) {
  const newString = str.split(" ");
  const obj1 = {};
  for (let i = 0; i < newString.length; i++) {
    let count = 1;
    // console.log(newString.includes(newString[i]));
    for (let j = i + 1; j < newString.length; j++) {
      if (newString[i] === newString[j]) {
        count = count + 1;
      } else count;
    }
    const key = newString[i];
    const arrKeys = Object.keys(obj1);
    let isExist = arrKeys.every(function (item) {
      return item !== key;
    });
    if (isExist) {
      obj1[key] = count;
    }
    // obj1[newString[i]] = count;
  }
  console.log(obj1);
}
countOccurrences("Hello hello world hello hello");
console.log("----------------------");
// Bài tập 8: Thay thế từ trong chuỗi
// Viết một hàm có tên "replaceWord" nhận vào một chuỗi, một từ cũ và một từ mới.
// Hàm này sẽ trả về một chuỗi mới với tất cả các từ cũ được thay thế bằng từ mới.
// replaceWord("Hello world", "world", "universe"); // Output: "Hello universe"
// replaceWord("This is a test sentence.", "test", "sample"); // Output: "This is a sample sentence."
function replaceWord(string, w1, w2) {
  return string.replace(w1, w2);
}
console.log(replaceWord("This is a test sentence.", "test", "sample"));
console.log("----------------------");
// Bài tập 9: Đếm số lượng ký tự chữ cái
// Viết một hàm có tên "countLetters" nhận vào một chuỗi và trả về số lượng ký tự chữ cái
// (không tính các ký tự đặc biệt và khoảng trắng).
// countLetters("Hello world"); // Output: 10
// countLetters("This is a test sentence."); // Output: 19
function countLetters(string) {
  return string.match(/[a-z]/gi).length;
}
console.log(countLetters("This is a test sentence."));

console.log("abc.");
console.log("----------------------");
// Bài tập 11: Kiểm tra định dạng email hợp lệ
// Viết một hàm có tên "isValidEmail" nhận vào một chuỗi và trả về true nếu chuỗi là một định dạng email hợp lệ, ngược lại trả về false.
// isValidEmail("test@example.com"); // Output: true
// isValidEmail("invalid.email@.com"); // Output: false
function isValidEmail(string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(string);
}
console.log(isValidEmail("TEST@example.com"));
console.log("----------------------");
// Bài tập 12: Rút gọn chuỗi
// Viết một hàm có tên "truncateString" nhận vào một chuỗi và một số nguyên dương n.
// Hàm này sẽ rút gọn chuỗi thành độ dài n và thêm dấu ba chấm (...) ở cuối nếu chuỗi ban đầu dài hơn n.
// truncateString("This is a long sentence.", 10); // Output: "This is a..."
// truncateString("Short sentence.", 20); // Output: "Short sentence."

function truncateString1(string, num) {
  if (string.length > num) {
    return string.substring(0, num).trim() + "...";
  }
}
console.log(truncateString1("This is a long sentence.", 10));
console.log("----------------------");
// Bài tập 14: Tìm từ dài nhất
// Viết một hàm có tên "findLongestWord" nhận vào một chuỗi và trả về từ dài nhất trong chuỗi.
// findLongestWord("Hello world"); // Output: "Hello"
// findLongestWord("This is a test sentence."); // Output: "sentence."
function findLongestWord(string) {
  const arr = string.split(" ");
  console.log(arr);
  let max = 0;
  let word = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      word = arr[i];
    }
  }
  return word;
}
console.log(findLongestWord("Hello world"));
console.log("----------------------");
// Bài tập 15: Tách chuỗi thành các câu
// Viết một hàm có tên "splitSentences" nhận vào một chuỗi và trả về một mảng chứa các câu của chuỗi đó.
// splitSentences("Hello. This is a test. Sentence."); // Output: ["Hello.", "This is a test.", "Sentence."]
// splitSentences("Another example"); // Output: ["Another example"]
function splitSentences(string) {
  const arr = string.match(/\b.+?\./g);
  console.log(arr);
}
console.log(splitSentences("Hello. This is a test. Sentence."));

console.log("----------------------");
// Bài tập 16: Thay thế các ký tự đặc biệt
// Viết một hàm có tên "replaceSpecialCharacters" nhận vào một chuỗi và trả về một chuỗi mới trong đó
// các ký tự đặc biệt được thay thế bằng khoảng trắng.
// replaceSpecialCharacters("Hello@world!"); // Output: "Hello world "
// replaceSpecialCharacters("This-is_a*test"); // Output: "This is_a test"
function replaceSpecialCharacters(string) {
  return string.replace(/[^a-z0-9]/gi, " ");
}
console.log(replaceSpecialCharacters("This-is_a*test"));
console.log("----------------------");
// Bài tập 17: Mã hóa chuỗi
// Viết một hàm có tên "encodeString" nhận vào một chuỗi và trả về chuỗi mới được mã hóa bằng cách thay thế mỗi ký tự bằng mã Unicode của nó.
// encodeString("Hello world"); // Output: "\u0048\u0065\u006c\u006c\u006f\u0020\u0077\u006f\u0072\u006c\u0064"
// encodeString("This is a test sentence."); // Output: "\u0054\u0068\u0069\u0073\u0020\u0069\u0073\u0020\u0061\u0020\u0074\u0065\u0073\u0074\u0020\u0073\u0065\u006e\u0074\u0065\u006e\u0063\u0065\u002e"
function encodeString(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let partial = string[i].charCodeAt(0).toString(16);
    console.log(partial);
    while (partial.length !== 4) partial = "0" + partial;
    result += "\\u" + partial;
  }
  return result;
}
console.log(encodeString("Hello world"));
console.log("----------------------");
// Bài tập 18: Chia chuỗi thành các phần tử con
// Viết một hàm có tên "splitString" nhận vào một chuỗi và một số nguyên dương n.
// Hàm này sẽ chia chuỗi thành các phần tử con có độ dài là n và trả về một mảng chứa các phần tử con đó.
// splitString("Hello world", 3); // Output: ["Hel", "lo ", "wor", "ld"]
// splitString("This is a test sentence.", 5); // Output: ["This ", "is a ", "test ", "sente", "nce."]
function splitString(string, n) {
  const arr = [];
  let j = 0;
  for (let i = j; i < string.length; i = i + n) {
    j = i + n;
    const str = string.substring(i, j);

    arr.push(str);
  }
  return arr;
}
console.log(splitString("This is a test sentence.", 5));

console.log("----------------------");

// Bài tập 19: Kiểm tra chuỗi có chứa từ khóa không
// Viết một hàm có tên "containsKeyword" nhận vào một chuỗi và một từ khóa.
// Hàm này sẽ trả về true nếu chuỗi chứa từ khóa, ngược lại trả về false.
// containsKeyword("Hello world", "world"); // Output: true
// containsKeyword("This is a test sentence.", "example"); // Output: false
function containsKeyword(string, text) {
  return string.includes(text);
}
console.log(containsKeyword("This is a test sentence.", "test"));

console.log("----------------------");
// Bài tập 20: Kiểm tra chuỗi có bắt đầu bằng từ khóa không
// Viết một hàm có tên "startsWithKeyword" nhận vào một chuỗi và một từ khóa.
// Hàm này sẽ trả về true nếu chuỗi bắt đầu bằng từ khóa, ngược lại trả về false.
// startsWithKeyword("Hello world", "Hello"); // Output: true
// startsWithKeyword("This is a test sentence.", "is"); // Output: false
function startsWithKeyword(string, word) {
  return string.startsWith(word);
}
console.log(startsWithKeyword("This is a test sentence.", "This"));
