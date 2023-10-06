// var courses = [
//   {
//     id: 1,
//     name: "Javascript",
//     coin: 250,
//   },
//   {
//     id: 2,
//     name: "HTML, CSS",
//     coin: 0,
//   },
//   {
//     id: 3,
//     name: "Ruby",
//     coin: 0,
//   },
//   {
//     id: 4,
//     name: "PHP",
//     coin: 400,
//   },
//   {
//     id: 5,
//     name: "ReactJS",
//     coin: 500,
//   },
// ];
//forEach
// var languages = ["Javascript", "PHP", "Ruby", "Java"];
// languages.length = 15;
// var i = 0;
// while (i < languages.length) {
//   console.log(languages[i]);
//   i++;
// }

// do {
//   console.log(languages[i]);
//   i++;
// } while (i < languages.length);

// courses.forEach(function (course) {
//   // console.log(course);
//    course;
// });

//every
// var isFree = courses.every(function (course) {
//   return course.coin === 0;
// });
// console.log(isFree);

//some
// var isFree = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);

//find
// var course = courses.find(function (course, index) {
//   return course.name === "Ruby2";
// });
// console.log(course);

//filter()
// var listCourses = courses.filter(function(course, index){
//   return
// })

// var newCourses = courses.map(function (course) {
//   console.log(course);
// return "hien";
// return course;
// return `khoa hoc   ${course.name} gia  ${course.coin}`;
// return course.name;
// return course.coin;
// return {
//   ten: `khoa hoc ${course.name}`,
//   gia: `gia ${course.coin}`,
// };
// });
// console.log(newCourses);
// var coinTotal = courses.reduce((total, course) => total + course.coin, 0);
// console.log(coinTotal);

// var numbers = [100, 200, 220, 200, 480];

// var totalNumber = numbers.reduce((total, number) => total + number);
// console.log(totalNumber);

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// var newArray = depthArray.reduce(function (a, d) {
//   console.log(a);
//   console.log(typeof d);

//   return a.concat(d);
// }, []);
// console.log(newArray);

//Lấy ra các khóa học đưa vào 1 mảng mới
// var topics = [
//   {
//     topic: "font-end",
//     courses: [
//       {
//         id: 1,
//         title: "HTML, CSS",
//       },
//       {
//         id: 2,
//         title: "Javascript",
//       },
//     ],
//   },
//   {
//     topic: "back-end",
//     courses: [
//       {
//         id: 1,
//         title: "PHP",
//       },
//       {
//         id: 2,
//         title: "NodeJS",
//       },
//     ],
//   },
// ];

// [
//   { id: 1,
//     title: "HTML, CSS"
//   },
//   {
//     id: 2,
//     title: "Javascript",
//   },
//   {
//     id: 1,
//     title: "PHP",
//   },
//   {
//     id: 2,
//     title: "NodeJS",
//   }
// ]
// var newCourses = topics.reduce(function (a, b) {
//   // console.log(a);
//   // console.log(b.courses);
//   return a.concat(b.courses);
// }, []);
// console.log(newCourses);

// var fullName = "hoang hien";
// console.log(fullName);
// console.log(typeof fullName);

// var nameCar = new String("hien");
// console.log(nameCar);
// console.log(typeof nameCar);

// var info = {
//   ten: "hien",
//   ho: "hoang",
//   tuoi: 18,
// };
// console.log(info);
// console.log(typeof info);

// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);
// console.log(typeof person);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// console.log(typeof cars);

// var points = new Array("Saab", "Volvo", "BMW");
// console.log(points);
// console.log(typeof points);

//includes method
// var title = "Responsive web design";
// console.log(title.includes("Responsive", 0));

// var languages = ["Javascript", "Ruby", "react"];
// console.log(languages.includes("Javascript", -3));

//dem so phan tu trung nhau
// const pounds = [11, 11, 16, 19, 46, 29, 46, 19, 21];

// const count = pounds.reduce((currentObject, currentValue) => {
//   // console.log(data); // {}
//   // console.log(pound); // 11

//   //cach 1
//   // data[pound] = (data[pound] || 0) + 1; // {11 : ({11} || 0) +1}
//   //cach 2
//   const value = currentObject[currentValue];
//   // data[pound] = (value || 0) + 1;
//   currentObject[currentValue] = (value ? value : 0) + 1;
//   // console.log((data[pound] || 0) + 1);
//   return currentObject;
// }, {});

// console.log(count); // { '11': 1 , '16': 1, '19': 2, '21': 2, '29': 1, '46': 2 }

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// do {
//   console.log(cars[i]);
//   i++;
// } while (i < cars.length);

// let i = 0;
// // let text = "";
// while (cars[i]) {
//   console.log(i);
//   // console.log(cars[i]);
//   // text += cars[i];
//   i++;
// }
// console.log(text);

// const myArray = ["BMW1", "Volvo1", "Saab1", "Ford1"];
// // initialize a variable to keep track of the current index
// let j = 0;
// // let text1 = "";
// // loop through the array using a while loop
// while (j < myArray.length) {
//   // console.log(j);
//   // print the current element of the array
//   // text1 += myArray[j];
//   console.log(myArray[j]);
//   // increment the index variable
//   j++;
// }
// console.log(text1);

// const myArray = [1, 2, 3, 4, 5];

// // initialize a variable to keep track of the current index
// let i = 0;

// // loop through the array using a do...while loop
// do {
//   // print the current element of the array
//   console.log(myArray[i]);

//   // increment the index variable
//   i++;
// } while (i < myArray.length);

// var fullName =
//   "Trên đây là những vấn đề cơ bản về sắp xếp mảng trong JavaScript," +
//   "cùng với một số thuật toán sắp xếp mảng 1 chiều." +
//   " Theo mình, đây là những kiến thức cơ bản và có thể được áp dụng rất nhiều.";
// console.log(fullName);

// console.log("----------------------------------");
// console.log("----------------------------------");
// console.log("----------------------------------");

// // Array là 1 biến đặc biệt có thể chứa nhiều hơn 1 giá trị
// // ?? Object có phải là 1 biến

// const cars = ["ford"]; // Tạo một mảng rỗng

// // Thêm các phần tử vào mảng
// cars[1] = "bmw";
// cars[2] = "honda";
// cars[10] = "vinfast";
// console.log(cars);
// console.log(cars[7]);

// // có 2 giá trị Saab
// const oto = ["Saab", "Volvo", "BMW", "Saab"];
// delete oto[0];

// console.log(oto);

// console.log("------------");

// // có 2 thuộc tính name
// const car = {
//   name: "honda",
//   color: "black",
//   name: "bmw",
// };

// console.log(car);

// // Lấy (truy cập) giá trị
// let firstOto = oto[1];
// console.log(firstOto);

// // toString()
// let fruits = ["apple", "banana", "orange"];
// let fruitsString = fruits.toString();
// console.log(fruitsString);

// // flat(): Nối các phần tử mảng con/ Làm phẳng 1 mảng
// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat());
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(3));
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

// // // // Xóa bỏ giá trị trùng lặp
// let fruits = [
//   "banana",
//   "apple",
//   "orange",
//   "watermelon",
//   "apple",
//   "orange",
//   "grape",
//   "apple",
// ];

// // First method
// let uniqueFruits = Array.from(new Set(fruits));
// console.log(uniqueFruits); // returns ['banana', 'apple', 'orange', 'watermelon', 'grape']

// // Or use Second method
// let uniqueFruits2 = [...new Set(fruits)];
// console.log(uniqueFruits2); // returns ['banana', 'apple', 'orange', 'watermelon', 'grape']

// flat() tiếp => Làm phẳng 1 mảng
// const array = [
//   { id: 1, name: "Trần" },
//   { id: 2, name: "Nữ" },
//   [{ id: 3, name: "Như" }, [{ id: 4, name: "Quỳnh" }]],
// ];
// const newArray = array.flat(Infinity);
// console.log(newArray);

// JS Array Sort
// Khi phương thức sort() so sánh hai giá trị, nó gọi hàm so sánh (compare function) và sắp xếp các giá trị dựa vào giá trị trả về (âm, bằng 0 hoặc dương).

// - Nếu kết quả là âm, giá trị a được sắp xếp trước giá trị b.
// - Nếu kết quả là dương, giá trị b được sắp xếp trước giá trị a.
// - Nếu kết quả là 0, không có sự thay đổi về thứ tự sắp xếp của hai giá trị.
// Sắp xếp mảng số
// let numbers = [40, 100, 1, 5, 25];
// numbers.sort(function (b, a) {
//   // a= 40, b= 100
//   //   return b - a; // [100,40,1,5,25] [100,40,5,1,25] [100,40,25,1,5] [100,40,25,5,1]
//   return a - b;
// });
// console.log(numbers); // Kết quả: [1, 5, 25, 40, 100]

// const carss = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];
// carss.sort(function (a, b) {
//   return a.year - b.year;
// });
// console.log(carss);
