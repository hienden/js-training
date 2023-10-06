// String
// - Chuỗi Javascript được sử dụng để lưu trữ và xử lý văn bản
// - Một chuỗi Javascript là một chuỗi các kí tự, có thể không có ký tự nào hoặc nhiều ký tự, viết bên trong dấu ngoặc kép.

const a = "hello";
const b = "hello world";
const empty = "";

const name1 = 'xin chao toi ten la "Hien"'; // sử dụng \" = "
console.log(name1);

// thuộc tính length trả về độ dài của chuỗi
console.log(name1.length);

// Methods của string
const c = "toi la a";
const d = "Lorem ipsum dolor Sit amet ipsum consectetur Adipisicing elit";

console.log(c.toUpperCase()); // in ra chuỗi viết hoa
console.log(d.toLowerCase()); // in ra chuỗi viết thường
console.log("   abc edf   ");
console.log("   abc edf   ".trim()); // cắt bỏ khoảng trắng 2 đầu của chuỗi
console.log("abc".concat("edf")); // nối chuỗi
console.log(d.substring(0, 5)); // Lorem (vị trí các kí tự trong 1 chuỗi sẽ bắt đầu tù 0 (index)

console.log(d.indexOf("ipsum")); // trả về index, vị trí đầu tiên của 1 chuỗi hoặc 1 kí tự cần tìm kiếm
console.log(d.includes("dolor", 13)); // trả về true nếu chuỗi được tìm thấy
console.log(d.startsWith("Lorem")); // trả về true nếu tìm thấy từ bắt đầu  là Lorem
console.log(d.endsWith("elitt")); // trả về true nếu tìm thấy từ cuối cùng  là elitt

// Bài tập 6: Loại bỏ khoảng trắng thừa
// Viết một hàm có tên "trimWhitespace" nhận vào một chuỗi và trả về chuỗi mới đã loại bỏ các khoảng trắng thừa ở đầu và cuối chuỗi.

function trimWhitespace(str) {
  const string1 = str.trim();
  return string1;
}

const result1 = trimWhitespace("   Hello world   ");
console.log(result1);

const result2 = trimWhitespace("  This is a sample sentence.   ");
console.log(result2);

console.log("--------------------------------------");
console.log("--------------------------------------");
