const colors = ["green", "red", "#098abc"];
// b2: đăng ký sự kiện cho nút thay đổi màu sắc.
const btnChangeColor = document.getElementById("color-flipper");
const textColor = document.getElementById("color");

// events listen: mouses (click, context menu)
// addEventListener: là method để đăng kí 1 event cho 1 phần tử
// addEventListener: nhận vào 2 tham số gọi p1, p2
//  p1: tên sự kiện muốn đăng ký cho phần tử html (click, dbclick)
//  p2: là 1 function sẽ được thực thi khi sự kiện xảy ra.

const getColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
const changeColor = function () {
  const color = getColor();
  document.body.style.backgroundColor = color;
  document.getElementById("color").textContent = color;
};
btnChangeColor.addEventListener("click", changeColor);
