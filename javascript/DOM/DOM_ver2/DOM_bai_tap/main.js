// **Bài tập 1: Thay đổi màu nền của trang web**
// Mô tả:

// - Input: Màu nền mới (sử dụng mã màu hoặc tên màu CSS).
// - Output: Thay đổi màu nền của trang web thành màu được chỉ định.

// **Bài tập 2: Đếm số lượng các phần tử**
// Mô tả:

// - Input: Tên thẻ HTML (ví dụ: "div", "p", "h1"...) hoặc lớp (class) của các phần tử cần đếm.
// - Output: Hiển thị số lượng các phần tử tương ứng.

// **Bài tập 3: Tạo danh sách**
// Mô tả:

// - Input: Một mảng chứa các phần tử của danh sách.
// - Output: Hiển thị danh sách các phần tử trên trang web.

const fruitElement = document.getElementById("fruit");
const fruits = ["apple", "banana", "mango", "orange"];

fruitElement.innerHTML = fruits.map((fruit) => `<ul><li>${fruit}</li></ul>`);

// **Bài tập 4: Ẩn/Hiện phần tử**
// Mô tả:

// - Input: Một phần tử hoặc một danh sách các phần tử cần ẩn hoặc hiện.
// - Output: Cho phép người dùng ẩn hoặc hiện các phần tử được chỉ định.

// **Bài tập 5: Tạo một Form đơn giản**
// Mô tả:

// - Input: Mô tả các trường nhập liệu cần có trong form (ví dụ: tên, email, số điện thoại...).
// - Output: Hiển thị form và kiểm tra thông tin nhập liệu khi người dùng gửi form.

// **Bài tập 6: Tạo hình ảnh chuyển động**
// Mô tả:

// - Input: Một hình ảnh và vị trí đích muốn di chuyển đến.
// - Output: Thực hiện hiệu ứng di chuyển hình ảnh từ vị trí hiện tại đến vị trí đích.

// **Bài tập 7: Tạo chức năng tìm kiếm**
// Mô tả:

// - Input: Một danh sách các phần tử và từ khóa tìm kiếm.
// - Output: Hiển thị danh sách các phần tử phù hợp với từ khóa tìm kiếm.

// **Bài tập 8: Tạo chức năng đánh giá sao**
// Mô tả:

// - Input: Số lượng sao tối đa và số lượng sao người dùng chọn.
// - Output: Hiển thị số sao tương ứng và ghi nhận số sao mà người dùng chọn.

const score = document.querySelector(".score");
console.dir(score);

const ratings = document.querySelectorAll(".rating input");
console.log(ratings);

ratings.forEach((rating) => {
  rating.addEventListener("change", () => {
    const selectedRating = rating.value;
    console.log(selectedRating);

    const text = selectedRating == 1 ? "star" : "stars";

    score.textContent = `${selectedRating} ${text} rating`;
  });
});

// **Bài tập 9: Tạo chức năng phân trang**
// Mô tả:

// - Input: Một danh sách các phần tử và số lượng phần tử hiển thị trên mỗi trang.
// - Output: Hiển thị các phần tử trong danh sách theo từng trang.

// **Bài tập 10: Tạo chức năng đổi mật khẩu**
// Mô tả:

// - Input: Trường nhập mật khẩu cũ và mật khẩu mới.
// - Output: Cho phép người dùng nhập mật khẩu cũ và mật khẩu mới, sau đó kiểm tra tính hợp lệ của mật khẩu cũ và hiển thị thông báo thành công nếu đổi mật khẩu thành công.

// **Bài tập 11: Tạo chức năng đếm lượt click**
// Mô tả:

// - Input: Một phần tử hoặc nút được chọn.
// - Output: Hiển thị số lần click vào phần tử hoặc nút được chọn.

const clickElement = document.getElementById("click");
const clickTotal = document.getElementById("click-total");

let clickCount = 0;
clickTotal.textContent = clickCount;
clickElement.addEventListener("click", function () {
  clickCount++;
  clickTotal.textContent = clickCount;
});

// **Bài tập 12: Tạo chức năng thêm/xóa lớp CSS**
// Mô tả:

// - Input: Một phần tử và tên lớp CSS.
// - Output: Cho phép người dùng thêm hoặc xóa lớp CSS từ phần tử.

const btnCss = document.getElementById("btn-css");
const paraCss = document.getElementById("para-css");

btnCss.addEventListener("click", function () {
  paraCss.classList.toggle("para-css");
  btnCss.textContent === "Them CSS"
    ? (btnCss.textContent = "Xoa CSS")
    : (btnCss.textContent = "Them CSS");
});
// **Bài tập 13: Tạo chức năng kiểm tra định dạng email**
// Mô tả:

// - Input: Một trường nhập email.
// - Output: Kiểm tra tính hợp lệ của định dạng email và hiển thị thông báo tương ứng.

// **Bài tập 14: Tạo chức năng đếm ngược**
// Mô tả:

// - Input: Một số giây.
// - Output: Đếm ngược từ số giây nhập vào và hiển thị thời gian còn lại.

const countdown = document.getElementById("countdown");
let timeLeft = 10;

countdown.innerHTML = timeLeft;

const intervalId = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(intervalId);
  } else {
    countdown.innerHTML = timeLeft - 1;
  }
  timeLeft--;
}, 1000);
