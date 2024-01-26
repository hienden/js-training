const inputTaskElement = document.getElementById("input-task");
const addTaskElement = document.getElementById("add-task");
const taskListElement = document.querySelector(".task-list");

addTaskElement.addEventListener("click", function () {
  const li = document.createElement("li");
  li.classList.add("row");
  li.innerHTML = `<div><input type="checkbox" id="" /><span>${inputTaskElement.value}</span></div><button type="button" class="delete-task"><i class="fa-solid fa-x"></i></button>`;
  taskListElement.appendChild(li);
  inputTaskElement.value = "";
  console.log(li);
  console.log(taskListElement.innerHTML);
  localStorage.setItem("data", taskListElement.innerHTML);
});
