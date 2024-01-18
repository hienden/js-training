// b1: Khởi tạo danh sách các ký tự để tạo ra mã hex
const hexs = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// b2: đăng ký sự kiện cho nút thay đổi màu sắc.
const btnChangeColor = document.getElementById("color-flipper");
const textColor = document.getElementById("color");

const generateBandomIndex = () => Math.floor(Math.random() * hexs.length);

const getColor = () => {
  let result = "#";
  for (let i = 0; i < 6; i++) {
    const hexChar = hexs[generateBandomIndex()];

    result += hexChar;
  }
  return result;
};
const changeColor = function () {
  const color = getColor();
  document.body.style.backgroundColor = color;
  textColor.textContent = color;
  textColor.style.color = color;
};
btnChangeColor.addEventListener("click", changeColor);
