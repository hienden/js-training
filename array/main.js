// Bài tập 1: Tính tổng các số
// Viết một hàm có tên "sumArray" nhận vào một mảng các số nguyên và trả về tổng của tất cả các số trong mảng.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(sumArray(arr));

console.log("--------------1");

// Bài tập 2: Tìm số lớn nhất và nhỏ nhất
// Viết một hàm có tên "findMinMax" nhận vào một mảng các số nguyên và trả về một mảng chứa số lớn nhất và nhỏ nhất trong mảng đó.
function findMinMax(arr) {
  let arr1 = [];
  let max = Math.max(...arr);
  arr1.push(max);
  let min = Math.min(...arr);
  arr1.push(min);
  return arr1;
}
const arr2 = [10, 20, 30, 40, 50];
console.log(arr2);
console.log(findMinMax(arr2));

console.log("--------------2");

// Bài tập 3: Lọc các số chẵn
// Viết một hàm có tên "filterEvenNumbers" nhận vào một mảng các số nguyên và trả về một mảng mới chỉ chứa các số chẵn từ mảng ban đầu.
function filterEvenNumbers(arr) {
  let arr1 = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      arr1.push(element);
    }
  });
  return arr1;
}
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3);
console.log(filterEvenNumbers(arr3));

console.log("--------------3");

// Bài tập 4: Sắp xếp mảng
// Viết một hàm có tên "sortArray" nhận vào một mảng các số nguyên và trả về một mảng mới đã được sắp xếp theo thứ tự tăng dần.
function sortArray(arr4) {
  return arr4.sort((a, b) => a - b);
}

const arr4 = [3, 1, 4, 2, 5];
console.log(arr4);
console.log(sortArray(arr4));

console.log("--------------4");

// Bài tập 5: Tìm các số lớn hơn x
// Viết một hàm có tên "findNumbersGreaterThanX" nhận vào một mảng các số nguyên và một số x. Hàm này sẽ trả về một mảng mới chứa các số trong mảng ban đầu mà lớn hơn x.
function findNumbersGreaterThanX(arr, x) {
  return arr.filter((num) => num > x);
}
const array = [1, 2, 3, 4, 5];
console.log(array);

console.log(findNumbersGreaterThanX(array, 2));

console.log("--------------5");

// Bài tập 6: Đảo ngược mảng
// Viết một hàm có tên "reverseArray" nhận vào một mảng và trả về một mảng mới chứa các phần tử của mảng ban đầu được sắp xếp theo thứ tự đảo ngược.

function reverseArray(arr) {
  return arr.reverse();
}
const arr6 = [10, 20, 30, 40, 50];
console.log(arr6);
console.log(reverseArray(arr6));

console.log("--------------6");

// Bài tập 7: Ghép mảng
// Viết một hàm có tên "concatArrays" nhận vào hai mảng và trả về một mảng mới chứa tất cả các phần tử từ hai mảng đầu vào.
function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
const array1 = [1, 2, 3];
console.log(array1);
const array2 = [4, 5];
console.log(array2);
console.log(concatArrays(array1, array2));

console.log("--------------7");

// Bài tập 8: Tìm số lần xuất hiện
// Viết một hàm có tên "countOccurrences" nhận vào một mảng các phần tử và một giá trị x. Hàm này sẽ trả về số lần xuất hiện của x trong mảng ban đầu.
function countOccurrences(arr, x) {
  const result = arr.filter((i) => i === x).length;
  return result;
}
const arr8 = [1, 2, 3, 4, 1, 2, 1];
console.log(arr8);
console.log(countOccurrences(arr8, 1));

console.log("--------------8");

// Bài tập 9: Loại bỏ các giá trị trùng nhau
// Viết một hàm có tên "removeDuplicates" nhận vào một mảng và trả về một mảng mới chỉ chứa các phần tử duy nhất (loại bỏ các giá trị trùng nhau).
function removeDuplicates(arr) {
  const uniqueChars = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return uniqueChars;
}
const arr9 = [1, 2, 3, 4, 1, 2, 1];
console.log(arr9);
console.log(removeDuplicates(arr9));

console.log("--------------9");

// Bài tập 10: Tìm các số nguyên tố
// Viết một hàm có tên "findPrimeNumbers" nhận vào một mảng các số nguyên và trả về một mảng mới chỉ chứa các số nguyên tố từ mảng ban đầu.
function findPrimeNumbers(arr) {
  let result = [];
  return arr.filter((num) => isPrime(num));

  //   for (let i = 0; i < arr.length; i++) {
  //     if (isprime(arr[i]) == 1) result.push(arr[i]);
  //   }
  //   return result;
  // }
}
function isPrime(n) {
  let flag = true;

  if (n < 2) return false;
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = false;
      break;
    }
    i++;
  }
  return flag;
}
let array10 = [11, 13, 1, 2, 3, 4, 2, 6, 7, 8, 9, 10];
console.log(array10);

console.log(findPrimeNumbers(array10));

console.log("--------------10");

// Bài tập 11: Sử dụng map() để nhân đôi mảng
// Viết một hàm có tên "doubleArray" nhận vào một mảng số nguyên và sử dụng phương thức map() để nhân đôi giá trị của mỗi phần tử trong mảng và trả về một mảng mới.
function doubleArray(arr) {
  let newarr = arr.map((item) => {
    return item * 2;
  });
  return newarr;
}
const arr11 = [1, 2, 3, 4, 5];
console.log(arr11);
console.log(doubleArray(arr11));

console.log("--------------11");

// Bài tập 12: Sử dụng filter() để lọc các phần tử lớn hơn x
// Viết một hàm có tên "filterNumbersGreaterThanX" nhận vào một mảng số nguyên và một số x. Hãy sử dụng phương thức filter() để lọc các phần tử trong mảng mà lớn hơn x và trả về một mảng mới.
function filterNumbersGreaterThanX(arr, x) {
  return arr.filter((item) => item > x);
}
const arr12 = [1, 2, 3, 4, 5];
console.log(arr12);
console.log(filterNumbersGreaterThanX(arr12, 2));

console.log("--------------12");

// Bài tập 13: Sử dụng find() để tìm số đầu tiên thỏa mãn điều kiện
// Viết một hàm có tên "findFirstEvenNumber" nhận vào một mảng số nguyên. Hãy sử dụng phương thức find() để tìm số chẵn đầu tiên trong mảng và trả về giá trị đó. Nếu không tìm thấy số chẵn, hàm sẽ trả về undefined.
function findFirstEvenNumber(arr) {
  return arr.find((num) => num % 2 === 0);
}
const arr13 = [1, 8, 3, 11, 5];
console.log(arr13);
console.log(findFirstEvenNumber(arr13));

console.log("--------------13");

// Bài tập 14: Sử dụng some() để kiểm tra xem có số lẻ nào trong mảng không
// Viết một hàm có tên "hasOddNumber" nhận vào một mảng số nguyên. Hãy sử dụng phương thức some() để kiểm tra xem có số lẻ nào trong mảng không và trả về true nếu có, ngược lại trả về false.
function hasOddNumber(arr) {
  return arr.some((num) => num % 2 !== 0);
}

const arr14 = [0, 1, 4, 6, 8, 10];
console.log(arr14);
console.log(hasOddNumber(arr14));

console.log("--------------14");

// Bài tập 15: Sử dụng every() để kiểm tra xem tất cả số đều là số dương
// Viết một hàm có tên "areAllPositiveNumbers" nhận vào một mảng số nguyên. Hãy sử dụng phương thức every() để kiểm tra xem tất cả các số trong mảng có là số dương không và trả về true nếu đúng, ngược lại trả về false.
function areAllPositiveNumbers(arr) {
  return arr.every((num) => num > 0);
}
const arr15 = [1, 2, 3, 4, -5];
console.log(arr15);
console.log(areAllPositiveNumbers(arr15));

console.log("--------------15");

// Bài tập 16: Sử dụng includes() để kiểm tra sự tồn tại của phần tử trong mảng
// Viết một hàm có tên "hasElement" nhận vào một mảng số nguyên và một số x. Hãy sử dụng phương thức includes() để kiểm tra xem phần tử x có tồn tại trong mảng không và trả về true nếu có, ngược lại trả về false.
function hasElement(arr, x) {
  return arr.includes(x);
}
const arr16 = [1, 2, 4, 5];
console.log(arr16);
console.log(hasElement(arr16, 3));

console.log("--------------16");

// Bài tập 17: Sử dụng includes() để kiểm tra xem mảng có chứa tất cả các phần tử con không
// Viết một hàm có tên "containsAllElements" nhận vào hai mảng arr1 và arr2. Hãy sử dụng phương thức includes() để kiểm tra xem tất cả các phần tử của mảng arr2 có tồn tại trong mảng arr1 không và trả về true nếu có, ngược lại trả về false.

function containsAllElements(arr1, arr2) {
  let isContain = false;
  for (const item of arr2) {
    if (!arr1.includes(item)) {
      isContain = false;
      return isContain;
    }
    isContain = true;
  }

  return isContain;
}
const arr17 = [1, 2, 3, 4, 5];
console.log(arr17);
const arr18 = [1, 6, 5];
console.log(arr18);
console.log(containsAllElements(arr17, arr18));
// containsAllElements(arr17, arr18);

console.log("--------------17");
