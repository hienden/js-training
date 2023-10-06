// Yêu cầu
// - Tạo 1 function giải phương trình bậc 2
// - Nhận vào 3 tham số a, b, c tương ứng với các hệ số của phương trình
// Ví dụ  ax2+bx+c=0.
// - In ra kết quả tương ứng

// Bước 1: Tính Δ=b2-4ac
// Bước 2: So sánh Δ với 0
// Δ < 0 => phương trình (1) vô nghiệm
// Δ = 0 => phương trình (1) có nghiệm kép
// Δ > 0 => phương trình (1) có 2 nghiệm phân biệt

function giaiPhuongTrinhBacHai(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("phương trình (1) có 2 nghiệm phân biệt x1,x2 ", x1, x2);
  } else if (delta === 0) {
    console.log("phương trình (1) có nghiệm kép ", -b / (2 * a));
  } else {
    console.log("phương trình (1) vô nghiệm");
  }
}
giaiPhuongTrinhBacHai(4, -2, -6);

//  Vòng lặp for: Nó cho phép mình lặp qua dãy các giá trị hoặc các phần tử trong 1 mảng với các bước nhất định
// syntax for(let i = 0; i<length; step) {...code}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i += 2) {
  console.log("index: ", i); //0,2
  console.log("gia tri: ", arr1[i]); //arr1[0] =>1
}

// in ra các giá trị mà chia hết cho 2
for (let index = 0; index < arr1.length; index++) {
  //kiểm tra giá trị có chia hết cho 2 hay không?
  if (arr1[index] % 2 === 0) {
    // return arr1[i];
    console.log("các số chia hết cho 2:", arr1[index]);
  }
}
// Tính tổng của mảng trên
let sum = 0;
// let sum = 0;
for (let index = 0; index < arr1.length; index++) {
  sum = sum + arr1[index];
  //   console.log(sum);
}
// b3: In ra kết quả
console.log("sum", sum);

// in ra các ký tự của 1 chuỗi H,e,l(2),o, ,w,o,r,l,d
const str1 = "Hello world";
for (let index = 0; index < str1.length; index++) {
  console.log("cac ký tự:", str1[index]);
}

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "TOYOTA", year: 2034 },
  { type: "suzuki", year: 2023 },
];

// in ra giá trị của year
for (let index = 0; index < cars.length; index++) {
  console.log(cars[index].year);
}

const car1 = cars[0].type;
console.log(car1);
for (let index = 0; index < car1.length; index++) {
  console.log("cac ký tự:", car1[index]);
}

// for có thể lồng nhau
// const arrType = [];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i].type);
  // arrType.push(cars[i].type);
  for (let j = 0; j < cars[i].type.length; j++) {
    console.log(cars[i].type[j]);
  }
}
// Tạo 1 function nhận vào 1 số nguyên.
// - Yêu cầu: kiểm tra số nhận vào có phải số nguyên tố hay không? In ra kết quả tương ứng
// - Gợi ý: số nguyên tố là số lớn hơn 1 và chỉ chia hết cho chíng nó và chia hết cho 1.
// Ví dụ:
// kiemTraSoNguyenTo(3)
// => output: "3 là số nguyên tố"
// kiemTraSoNguyenTo(1)
// => output: "1 không phải số nguyên tố"

function kiemTraSoNguyenTo(num) {
  if (num < 2) console.log(num, "khong phai so nguyen to");
  else {
    for (let i = 2; i < num; i++) {
      console.log(i);
      if (num % i === 0) {
        console.log(i);
        console.log(num, "khong phai nguyen to");
        return;
      }
    }
    console.log(num, "la so nguyen to");
  }
}
kiemTraSoNguyenTo(2);

// Tạo 1 function nhận vào 1 mảng các số chưa được sắp xếp.
// - Yêu cầu: dùng vòng lặp for sắp xếp các phần tử theo thứ tự tăng dần , in ra kết quả mảng đã được sắp xếp.
// - Gợi ý: Tìm hiểu giải thuật selection sort
// Ví dụ:
// sortArray([9,7,34,1])
// => output: [1, 7, 9, 34]
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
console.log(sortArray([9, 7, 34, 1]));

// console.log("===============");

// Sắp xếp mảng theo thứ tự giảm dần
function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let max = i;
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    if (max != i) {
      temp = arr[max];
      arr[max] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
console.log(sortArray([9, 7, 34, 1])); // [34, 9, 7, 1]

// Kiem tra so nguyen to
function check(num) {
  // b1: kiểm tra số này nhỏ hơn 2
  if (num < 2) return false;

  // b2: lặp từ 2 -> num để kiểm tra
  for (let index = 2; index < num; index++) {
    if (num % index === 0) return false;
  }

  return true;
}

const num = 2;

if (check(num)) {
  console.log(num, "so nguyen to");
} else {
  console.log(num, "khong phai so nguyen to");
}

// function kiemTraSoNguyenTo(num) {
//   if (num < 2) {
//     console.log(num, "khong phai so nguyen to");
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         console.log(num, "khong phai nguyen to");
//         return;
//       }
//     }
//     console.log(num, "la so nguyen to");
//   }
// }

// kiemTraSoNguyenTo(17);
console.log("---------------");
//while: Dùng khi chưa biết số vòng lặp cần thực hiện
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("---------------");

// do...while: sẽ thực hiện ít nhất 1 lần lặp
let t = 2;
do {
  console.log(t);
  t++;
} while (t < 1);
console.log("---------------");
// câu lệnh break: kết thúc vòng lặp khi gặp lệnh break
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] === 3) {
    break; // kết thúc luôn vòng lặp với điều kiện = 3
  }
  console.log(arr1[index]);
}
console.log("---------------");
// câu lệnh continue: bỏ qua lần lặp hiện tại, nhưng vẫn thực hiện các lần lặp tiếp theo
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] === 3) {
    continue;
  }
  console.log(arr1[index]);
}
console.log("---------------");
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// tính tổng của arr1, Tổng của các số chẵn
let tong = 0;
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] % 2 !== 0) {
    continue;
  }
  tong += arr1[index];
}
console.log(tong);
console.log("---------------");
// for...of:dùng với array or string
const car = { type: "Volvo", year: 2016 };
for (const element of arr1) {
  console.log("for...of", element);
}
for (const value of Object.values(car)) {
  console.log(value);
}
for (const key of Object.keys(car)) {
  console.log(key);
}

// for...in: dùng lặp 1 giá trị có kiểu dữ liệu là object

for (const key in car) {
  console.log("for...in", key);
}

// foreach: 1 method của array
arr1.forEach(function (value, index) {
  console.log("for...each value: ", value);
  console.log("for...each index: ", index);
});

// map(). filter(), find(), some(), include(), reduce(): tìm hiểu thêm

// map: ánh xạ các giá trị cũ thành các giá trị mới, trả về 1 mảng mới
const newArr1 = arr1.map(function (value) {
  return value * 2;
});
console.log(newArr1);

console.log("---------------");
// filter: lọc các phần tử theo điều kiện,  và trả mảng mới
const filterArr = arr1.filter(function (value) {
  return value % 2 === 0;
});

console.log("filter", filterArr);
