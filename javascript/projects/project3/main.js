const inputTaskElement = document.getElementById("input-task");
const addTaskElement = document.getElementById("add-task");
const taskListElement = document.querySelector(".task-list");

let todos = [];

// Khi có dữ liệu => Lấy dữ liệu và in ra màn hình
let reference = localStorage.getItem("data"); // kiểu JSON
if (JSON.parse(reference)) {
  const todosElement = JSON.parse(reference).map(function (item) {
    return `<li class="row"><div><input type="checkbox" onclick="handleChecked('${item}')"/><span>${item.name}</span></div><button type="button" class="delete-task" onclick="handleDelete('${item.id}')"><i class="fa-solid fa-x"></i></button></li>`;
  });
  taskListElement.innerHTML = todosElement.join("");
}

// Ấn vào Add => thêm công việc, lưu dữ liệu và in ra màn hình
addTaskElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputTaskElement.value) {
    alert("vui long nhap input");
    return;
  }
  // if (JSON.parse(reference)) {
  //   todos = todos.concat(JSON.parse(reference));

  const todo = {
    id: Math.round(Math.random() * 10),
    name: inputTaskElement.value,
    completed: false,
  };
  todos.push(todo);
  localStorage.setItem("data", JSON.stringify(todos));
  const todosElement = todos.map(function (item) {
    console.log(item);
    return `<li class="row"><div><input type="checkbox" onclick="handleChecked('${item}')"/><span>${item.name}</span></div><button type="button" class="delete-task" onclick="handleDelete('${item.id}')"><i class="fa-solid fa-x"></i></button></li>`;
  });
  taskListElement.innerHTML = todosElement.join("");
  inputTaskElement.value = "";
});

// xóa công việc, cập nhật lại dữ liệu và hiển thị
function handleDelete(id) {
  console.log(id);
  let reference = localStorage.getItem("data");
  reference = JSON.parse(reference).filter(function (element) {
    return element.id !== Number(id);
  });
  localStorage.setItem("data", JSON.stringify(reference));
  const todosElement = reference.map(function (item) {
    return `<li class="row"><div><input type="checkbox" onclick="handleChecked('${item}')"/><span>${item.name}</span></div><button type="button" class="delete-task" onclick="handleDelete('${item.id}')"><i class="fa-solid fa-x"></i></button></li>`;
  });
  taskListElement.innerHTML = todosElement.join("");
}

// chuyển đổi giá trị hoàn thành và chưa hoàn thành
function handleChecked(item) {
  console.log(item); //{id: .. , name: '..', completed: false}
}
