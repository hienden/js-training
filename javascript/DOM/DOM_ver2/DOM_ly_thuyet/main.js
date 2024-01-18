// document: đối tượng document đại diện cho trang web hay ứng dụng web.
//- Nếu muốn truy cập bất kì phần tử nào trong HTML, thì ta luôn bắt đầu truy cập bằng document

// truy cập 1 phần tử bằng thuộc tính id
const h2Element = document.getElementById("h2"); // <=> querySelector("#h2")
console.log(h2Element);

const pElement = document.getElementById("paragraph");
console.log(pElement);

// Truy cập phần tử bằng tag name (tên thẻ html)
const h3List = document.getElementsByTagName("p"); // <=> querySelectorAll("p")
console.log(h3List);

// truy cập phần tử bằng class name
const span = document.getElementsByClassName("test"); // <=> querySelectorAll(".test")
console.log(span); //

// truy cập phần tử bằng css selector
// querySelector sẽ trả về phần tử đầu tiên mà nó tìm thấy
const el1 = document.querySelector("div>p");
console.log(el1);

// querySelectorAll sẽ trả về tất cả các phần tử mà nó tìm thấy
const el2 = document.querySelectorAll("#div>p");
console.log(el2);

const el3 = document.querySelectorAll('a[target = "_blank"]');
console.log(el3);

// thay đổi nội dung của html
const menu = document.querySelector("#menu");
console.log(menu.innerHTML); // thay thế li cũ
// innerHTML là thuộc tính dùng để set or get các phần tử HTML vào phần tử mà nó đang tham chiếu đến

// menu.innerHTML = "<li>xoi</li> <li>gao</li> <li>kem</li>";

menu.innerHTML = `<li>xoi</li>
                <li>gao</li>
                <li>kem</li>`;

const p1 = document.getElementById("p1");
// p1.innerHTML = "lorem lorem";
p1.innerHTML = "<strong>lorem lorem</strong>";

const p2 = document.getElementById("p2");
// textContent là thuộc tính set hoạc get nội dung văn bản thuần túy váo phần tử
// mà nó đang tham chiếu
p2.textContent = "<strong>lorem lorem a</strong>";

console.log(p1.textContent); // lorem lorem
console.log(p2.textContent); // <strong>lorem lorem a</strong>

//appendChild
const menu1 = document.getElementById("menu1");

// createElemnet: tạo 1 phần tử html theo tag name
const li = document.createElement("li");
// thêm nội dung vào phần tử vừa tạo
li.textContent = "xoi xeo";
console.log(li);

// appendChild: thêm 1 node (phần tử html mà mình tạo ra)
// vào cuối phần tử cha của nó // mà k bị mất đi li cũ như innerHTML

// menu1.appendChild("<li>abcdef</li>"); // không phải node

menu1.appendChild(li);

const parentDiv = document.getElementById("parentDiv");

// Truy cập tất cả các phần tử con (bao gồm các nút văn bản)
const allChildren = parentDiv.childNodes;
console.log(allChildren);

// Truy cập chỉ các phần tử con (loại bỏ các nút văn bản)
const elementChildren = parentDiv.children;
console.log(elementChildren);

// Thay đổi giá trị của 1 attribute trong 1 phần tử html
// attribute: là các thuộc tính trong 1 thẻ html (href, src, class, id,...)
const img = document.querySelector("#image");
img.src =
  "https://i.pinimg.com/originals/62/a3/65/62a365755819b4f771cac0bd39614da2.jpg";

const link = document.getElementById("link");
link.href = "https://www.facebook.com/";
console.dir(link);
console.log(img);

// DOM css: thay đổi kiểu dáng, hình dạng, style của 1 phần tử html bằng js
// vd: thay đổi màu nền, thay đổi font,....
const body = document.body;
// css: background-color => js: backgroundColor (camelCase)
body.style.backgroundColor = "green";
body.style.color = "#fff";

const box = document.getElementById("box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "blue";

box.textContent = "html css js";
box.style.textAlign = "center";

box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignItems = "center";

const box1 = document.getElementById("box1");
const rmBtn = document.getElementById("rm");

console.dir(box1);
console.log(box1);

box1.addEventListener("click", function () {
  //classList truy cập đến danh sách class của phần tử html
  // add thêm các class css vào phần tử html
  this.classList.add("box1", "rounded");
});

rmBtn.addEventListener("click", function () {
  //remove: để xóa các class trong phần tử html
  box1.classList.remove("rounded", "box1");
});

const box2 = document.getElementById("box2");
box2.addEventListener("click", function () {
  //toggle: remove class nếu có trong phần tử html và ngược lại
  this.classList.toggle("box1"); // chỉ truyền vào được 1 class
  this.classList.toggle("rounded");
});
