const inputTaskElement = document.getElementById("input-task");
const addTaskElement = document.getElementById("add-task");
const taskListElement = document.querySelector(".task-list");

let todos = [];

// hàm hiển thị ra màn hình
function redenTodos(todos) {
  const todosList = todos.map(function (item) {
    return `<li class="row ${item.completed ? "checked" : ""}" id="${item.id}">
              <div>
                <input type="checkbox" onclick="handleChecked('${item.id}')"/>
                <span>${item.name}</span>
              </div>
              <button type="button" class="delete-task" onclick="handleDelete('${
                item.id
              }')">
                <i class="fa-solid fa-x"></i>
              </button>
            </li>`;
  });
  taskListElement.innerHTML = todosList.join("");
  inputTaskElement.value = "";
}

// hàm lưu trữ dữ liệu vào localstorage
function setLocalStorage(todos) {
  localStorage.setItem("data", JSON.stringify(todos));
  redenTodos(todos);
}

// hàm lấy dữ liệu từ localstorage
function getLocalStorage() {
  let reference = localStorage.getItem("data"); // kiểu JSON

  if (reference) {
    todos = JSON.parse(reference); // important
    redenTodos(todos);
  }
}
// Khi có dữ liệu => Lấy dữ liệu và in ra màn hình

getLocalStorage();

// Ấn vào Add => thêm công việc, lưu dữ liệu và in ra màn hình
addTaskElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputTaskElement.value) {
    alert("vui long nhap input");
    return;
  }

  const todo = {
    id: Math.round(Math.random() * 10),
    name: inputTaskElement.value,
    completed: false,
  };
  todos.push(todo);
  setLocalStorage(todos);
});

// xóa công việc, cập nhật lại dữ liệu và hiển thị
function handleDelete(id) {
  getLocalStorage();
  const todo = todos.filter(function (element) {
    return element.id !== Number(id);
  });
  setLocalStorage(todo);
}

// chuyển đổi giá trị hoàn thành và chưa hoàn thành
function handleChecked(id) {
  getLocalStorage();
  const todo = todos.find(function (item) {
    return item.id === Number(id);
  });
  todo.completed = !todo.completed;
  setLocalStorage(todos);
}
