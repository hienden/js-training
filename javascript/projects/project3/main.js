const inputTaskElement = document.getElementById("input-task");
const addTaskElement = document.getElementById("add-task");
const taskListElement = document.querySelector(".task-list");

addTaskElement.addEventListener("click", function () {
  let todos = [];
  const todo = {
    id: Math.round(Math.random() * 10),
    name: inputTaskElement.value,
    completed: false,
  };
  console.log(todo);
  todos.push(todo);
  console.log(todos);

  // let todos = [
  //   {
  //     id: 1,
  //     name: "hien",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     name: "tho",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Anna",
  //     completed: false,
  //   },
  // ];

  const todosElement = todos.map(function (item) {
    return `<li class="row"><div><input type="checkbox" onclick="handleCheck()"/><span>${item.name}</span></div><button type="button" class="delete-task" onclick="handleDelete('${item.id}')"><i class="fa-solid fa-x"></i></button></li>`;
  });
  console.log(todosElement);
  taskListElement.innerHTML = todosElement.join("");
});

function handleDelete(id) {
  console.log(id);
}
function handleCheck() {}
