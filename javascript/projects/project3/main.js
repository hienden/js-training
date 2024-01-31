const inputTaskElement = document.getElementById("input-task");
const addTaskElement = document.getElementById("add-task");
const taskListElement = document.querySelector(".task-list");

let todos = [];

function redenTodos(arrTodos) {
  const todosArr = arrTodos.map(function (item) {
    if (item.completed === true) {
      const liElement = document.getElementById(item.id);
      if (liElement) {
        liElement.classList.add("checked");
      }
    }
    return `<li class="row" id="${item.id}">
              <div>
                <input type="checkbox" onclick="handleChecked('${item.id}')"/>
                <span>${item.name}</span>
              </div>
              <button type="button" class="delete-task" onclick="handleDelete('${item.id}')">
                <i class="fa-solid fa-x"></i>
              </button>
            </li>`;
  });
  taskListElement.innerHTML = todosArr.join("");
  inputTaskElement.value = "";
}

// Khi có dữ liệu => Lấy dữ liệu và in ra màn hình
let reference = localStorage.getItem("data"); // kiểu JSON

if (JSON.parse(reference)) {
  redenTodos(JSON.parse(reference));
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
  // }
  const todo = {
    id: Math.round(Math.random() * 10),
    name: inputTaskElement.value,
    completed: true,
  };
  todos.push(todo);
  localStorage.setItem("data", JSON.stringify(todos));
  redenTodos(todos);
});

// xóa công việc, cập nhật lại dữ liệu và hiển thị
function handleDelete(id) {
  let reference = localStorage.getItem("data");
  reference = JSON.parse(reference).filter(function (element) {
    return element.id !== Number(id);
  });
  localStorage.setItem("data", JSON.stringify(reference));
  redenTodos(reference);
}

// chuyển đổi giá trị hoàn thành và chưa hoàn thành
function handleChecked(id) {}
