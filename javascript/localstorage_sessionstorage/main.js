// cookies : Dữ liệu lưu trữ String, truy cập được dữ liệu ở bất kì cửa sổ nào, thời gian lưu trữ: phải set thời gian hết hạn thủ công
// local Storage : Dữ liệu lưu trữ String, truy cập được dữ liệu ở bất kì cửa sổ nào, không bao giờ hết hạn (phải xóa đi)
// session Storage : Dữ liệu lưu trữ String, dữ liệu được lưu ở tab này không thể truy cập được ở tab khác, đóng tab thì dữ liệu bị xóa

//cookies
// 1. Luu du lieu vao cookie
// document.cookie = `name=Hien; expires = ${new Date(
//   "2023-08-17 10:00:00"
// ).toUTCString()}`;
// document.cookie = `age=18; expires = ${new Date(
//   "2023-08-17 10:00:00"
// ).toUTCString()} `;

// 2. Đọc dữ liệu trong cookie
// console.log(document.cookie);

// //local storage
// // 1. Lưu dữ liệu vào local storage
// localStorage.setItem("name", "Tung");
// localStorage.setItem("age", 18);

// //2. Đọc dữ liệu trong local storage
// console.log(localStorage.getItem("age"));

// //3. xóa dữ liệu
// localStorage.removeItem("name");

// //4. Xóa đi tất cả dữ liệu trong localStorage
// localStorage.clear();

//session storage
//1. Lưu dữ liệu vào session storage
sessionStorage.setItem("name", "hien");
sessionStorage.setItem("age", 18);

//2. Đọc dữ liệu trong session Storage
getAge = sessionStorage.getItem("age");
console.log(getAge);

//3. xóa dữ liệu trong session Storage
// sessionStorage.removeItem("age");

//4. Xóa đi tất cả dữ liệu trong session Storage
sessionStorage.clear();
