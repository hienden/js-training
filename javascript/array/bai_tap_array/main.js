// Bài tập 1: Tính tổng các số
// Viết một hàm có tên "sumArray" nhận vào một mảng các số nguyên và trả về tổng của tất cả các số trong mảng.
// sumArray([1, 2, 3, 4, 5]); // Output: 15
// sumArray([10, 20, 30, 40, 50]); // Output: 150
function sumArray(array) {
  const totalArray = array.reduce(function (total, number) {
    return total + number;
  });
  return totalArray;
}
arr1 = [10, 20, 30, 40, 50];
result1 = sumArray(arr1);
console.log(result1);

console.log("--------------1");

// Bài tập 2: Tìm số lớn nhất và nhỏ nhất
// Viết một hàm có tên "findMinMax" nhận vào một mảng các số nguyên và trả về một mảng chứa số lớn nhất và nhỏ nhất trong mảng đó.
// findMinMax([1, 2, 3, 4, 5]); // Output: [1, 5]
// findMinMax([10, 20, 30, 40, 50]); // Output: [10, 50]
function findMinMax(arr) {
  let max = arr[0];
  let min = arr[0];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  newArr.push(max, min);
  return newArr;
}
arr2 = [5, 4, 7, 2, 8, 7, 3];
result2 = findMinMax(arr2);
console.log(result2);

console.log("--------------2");

// Bài tập 3: Lọc các số chẵn
// Viết một hàm có tên "filterEvenNumbers" nhận vào một mảng các số nguyên và trả về một mảng mới chỉ chứa các số chẵn từ mảng ban đầu.
// filterEvenNumbers([1, 2, 3, 4, 5]); // Output: [2, 4]
// filterEvenNumbers([10, 15, 20, 25, 30]); // Output: [10, 20, 30]
function filterEvenNumbers(arr) {
  return arr.filter((e) => {
    return e % 2 === 0;
  });
}
arr3 = [10, 15, 20, 25, 30];
result3 = filterEvenNumbers(arr3);
console.log(result3);

console.log("--------------3");

// Bài tập 4: Sắp xếp mảng
// Viết một hàm có tên "sortArray" nhận vào một mảng các số nguyên và trả về một mảng mới đã được sắp xếp theo thứ tự tăng dần.
// sortArray([3, 1, 4, 2, 5]); // Output: [1, 2, 3, 4, 5]
// sortArray([30, 10, 50, 20, 40]); // Output: [10, 20, 30, 40, 50]
function sortArray(arr) {
  arr.sort(function (prev, next) {
    return prev - next;
  });
  return arr;
}
arr4 = [30, 1, 4, 12, 5];
result4 = sortArray1(arr4);
console.log(result4);

//c2
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

arr4 = [30, 1, 4, 12, 5];
result4 = sortArray1(arr4);
console.log(result4);

console.log("--------------4");

// Bài tập 5: Tìm các số lớn hơn x
// Viết một hàm có tên "findNumbersGreaterThanX" nhận vào một mảng các số nguyên và một số x.
// Hàm này sẽ trả về một mảng mới chứa các số trong mảng ban đầu mà lớn hơn x.
// findNumbersGreaterThanX([1, 2, 3, 4, 5], 2); // Output: [3, 4, 5]
// findNumbersGreaterThanX([10, 15, 20, 25, 30], 20); // Output: [25, 30]
function findNumbersGreaterThanX(array, number) {
  return array.filter(function (element) {
    return element > 2;
  });
}
console.log(findNumbersGreaterThanX([1, 2, 3, 4, 5], 2));

console.log("--------------5");

// Bài tập 6: Đảo ngược mảng
// Viết một hàm có tên "reverseArray" nhận vào một mảng và trả về một mảng mới
// chứa các phần tử của mảng ban đầu được sắp xếp theo thứ tự đảo ngược.
// reverseArray([1, 2, 3, 4, 5]); // Output: [5, 4, 3, 2, 1]
// reverseArray([10, 20, 30, 40, 50]); // Output: [50, 40, 30, 20, 10]
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

console.log("--------------6");

// **Bài tập 7: Ghép mảng**
// Viết một hàm có tên "concatArrays" nhận vào hai mảng và trả về một mảng mới chứa tất cả các phần tử từ hai mảng đầu vào.
// concatArrays([1, 2, 3], [4, 5, 6]); // Output: [1, 2, 3, 4, 5, 6]
// concatArrays(["hello"], ["world"]); // Output: ["hello", "world"]
function concatArrays(array1, array2) {
  return array1.concat(array2);
}
console.log(concatArrays([1, 2, 3], [4, 5, 6]));

console.log("--------------7");

// Bài tập 8: Tìm số lần xuất hiện
// Viết một hàm có tên "countOccurrences" nhận vào một mảng các phần tử và một giá trị x.
// Hàm này sẽ trả về số lần xuất hiện của x trong mảng ban đầu.
// countOccurrences([1, 2, 3, 4, 1, 2, 1], 1); // Output: 3
// countOccurrences([10, 15, 20, 25, 30], 5); // Output: 0

// function countOccurrences(params) {

// }
function countOccurrences(array, x) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      count += 1;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 3, 4, 1, 2, 1], 1));

const arr = [0, 1, 2, 3];

//map: [0, 2, 4, 6]
const a = arr.map((v) => v * 2);
console.log(a);
const b = arr.reduce((t, v) => [...t, v * 2], []);
console.log(b);

console.log("--------------8");

// Bài tập 9: Loại bỏ các giá trị trùng nhau
// Viết một hàm có tên "removeDuplicates" nhận vào một mảng và trả về một mảng mới chỉ chứa các phần tử duy nhất
// (loại bỏ các giá trị trùng nhau).
// removeDuplicates([1, 2, 2, 3, 3, 4, 5]); // Output: [1, 2, 3, 4, 5]
// removeDuplicates(["apple", "banana", "apple", "orange"]); // Output: ["apple", "banana", "orange"]
function removeDuplicates(array) {
  return array.filter(function (element, index) {
    return array.indexOf(element) === index;
  });
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5]));

console.log("--------------9");

// **Bài tập 10: Tìm các số nguyên tố**
// Viết một hàm có tên "findPrimeNumbers" nhận vào một mảng các số nguyên và trả về một mảng mới chỉ chứa các số nguyên tố từ mảng ban đầu.
// findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: [2, 3, 5, 7]
// findPrimeNumbers([10, 15, 20, 25, 30]); // Output: []
// function isPrime(num) {
//   if (num < 2) return false;
//   else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
// function findPrimeNumbers(array) {
//   return array.filter(function (element) {
//     return isPrime(element);
//   });
// }
// console.log(findPrimeNumbers([10, 7, 20, 25, 30]));
// function isPrime(num) {
//   if (num < 2) return false;
//   else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
function findPrimeNumbers(array) {
  return array.filter(function (element) {
    // return isPrime(element);
    if (element < 2) return false;
    else {
      for (let i = 2; i < element; i++) {
        if (element % i === 0) {
          return false;
        }
      }
      return true;
    }
  });
}
console.log(findPrimeNumbers([10, 13, 20, 23, 30]));

console.log("--------------10");

// Bài tập 11: Sử dụng map() để nhân đôi mảng
// Viết một hàm có tên "doubleArray" nhận vào một mảng số nguyên và sử dụng phương thức map()
// để nhân đôi giá trị của mỗi phần tử trong mảng và trả về một mảng mới.
// doubleArray([1, 2, 3, 4, 5]); // Output: [2, 4, 6, 8, 10]
// doubleArray([10, 20, 30, 40, 50]); // Output: [20, 40, 60, 80, 100]
function doubleArray(array) {
  return array.map(function (element) {
    return element * 2;
  });
}
console.log(doubleArray([1, 2, 3, 4, 5]));

console.log("--------------11");

// Bài tập 12: Sử dụng filter() để lọc các phần tử lớn hơn x
// Viết một hàm có tên "filterNumbersGreaterThanX" nhận vào một mảng số nguyên và một số x. Hãy sử dụng phương thức filter()
// để lọc các phần tử trong mảng mà lớn hơn x và trả về một mảng mới.
// filterNumbersGreaterThanX([1, 2, 3, 4, 5], 2); // Output: [3, 4, 5]
// filterNumbersGreaterThanX([10, 15, 20, 25, 30], 20); // Output: [25, 30]
function filterNumbersGreaterThanX(array, num) {
  return array.filter(function (element) {
    return element > num;
  });
}
console.log(filterNumbersGreaterThanX([10, 15, 20, 25, 30], 20));

console.log("--------------12");

// Bài tập 13: Sử dụng find() để tìm số đầu tiên thỏa mãn điều kiện
// Viết một hàm có tên "findFirstEvenNumber" nhận vào một mảng số nguyên. Hãy sử dụng phương thức find()
// để tìm số chẵn đầu tiên trong mảng và trả về giá trị đó. Nếu không tìm thấy số chẵn, hàm sẽ trả về undefined.
// findFirstEvenNumber([1, 3, 5, 7, 8, 9, 10]); // Output: 8
// findFirstEvenNumber([1, 3, 5, 7, 9, 11]); // Output: undefined
function findFirstEvenNumber(array) {
  return array.find(function (element) {
    return element % 2 === 0;
  });
}
console.log(findFirstEvenNumber([1, 3, 5, 7, 9, 11]));

console.log("--------------13");

// Bài tập 14: Sử dụng some() để kiểm tra xem có số lẻ nào trong mảng không
// Viết một hàm có tên "hasOddNumber" nhận vào một mảng số nguyên. Hãy sử dụng phương thức some()
// để kiểm tra xem có số lẻ nào trong mảng không và trả về true nếu có, ngược lại trả về false.
// hasOddNumber([0, 2, 4, 6, 8, 10]); // Output: false
// hasOddNumber([1, 3, 5, 7, 9]); // Output: true

function hasOddNumber(array) {
  return array.some(function (element) {
    return element % 2 !== 0;
  });
}
console.log(hasOddNumber([1, 3, 5, 7, 9]));

console.log("--------------14");

// Bài tập 15: Sử dụng every() để kiểm tra xem tất cả số đều là số dương
// Viết một hàm có tên "areAllPositiveNumbers" nhận vào một mảng số nguyên. Hãy sử dụng phương thức every()
// để kiểm tra xem tất cả các số trong mảng có là số dương không và trả về true nếu đúng, ngược lại trả về false.
// areAllPositiveNumbers([1, 2, 3, 4, 5]); // Output: true
// areAllPositiveNumbers([-1, 2, 3, -4, 5]); // Output: false
function areAllPositiveNumbers(array) {
  return array.every(function (element) {
    return element > 0;
  });
}
console.log(areAllPositiveNumbers([-1, 2, 3, -4, 5]));

console.log("--------------15");

// Bài tập 16: Sử dụng includes() để kiểm tra sự tồn tại của phần tử trong mảng
// Viết một hàm có tên "hasElement" nhận vào một mảng số nguyên và một số x. Hãy sử dụng phương thức includes()
// để kiểm tra xem phần tử x có tồn tại trong mảng không và trả về true nếu có, ngược lại trả về false.
// hasElement([1, 2, 3, 4, 5], 3); // Output: true
// hasElement([1, 2, 4, 5], 3); // Output: false

function hasElement(array, num) {
  return array.includes(num);
}
console.log(hasElement([1, 2, 4, 5], 3));

console.log("--------------16");

// Bài tập 17: Sử dụng includes() để kiểm tra xem mảng có chứa tất cả các phần tử con không
// Viết một hàm có tên "containsAllElements" nhận vào hai mảng arr1 và arr2. Hãy sử dụng phương thức includes()
// để kiểm tra xem tất cả các phần tử của mảng arr2 có tồn tại trong mảng arr1 không và trả về true nếu có, ngược lại trả về false.
// containsAllElements([1, 2, 3, 4, 5], [2, 4, 5]); // Output: true
// containsAllElements([1, 2, 3, 4, 5], [2, 6]; // Output: false

function containsAllElements(array1, array2) {
  let result;
  for (const arr of array2) {
    if (!array1.includes(arr)) {
      result = false;
      return result;
    } else result = true;
  }
  return result;
}

console.log(containsAllElements([1, 2, 3, 4, 5], [9, 2, 5]));

console.log("--------------17");
