const btnElement = document.querySelector(".btn");
const usersElement = document.getElementById("users");

function fetchUsers() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        return response.json();
      })
      .then((users) => resolve(users))
      .catch((err) => reject(err));
  });
}

function generateTemplate(users) {
  return users.map((user) => {
    return `<div>
        <h4> ${user.name}</h4>
        <p> ${user.email}</p>
        <p>${user.phone}</p>
      </div>`;
  });
}

function showTemplate(template) {
  usersElement.innerHTML = template.join("");
}

btnElement.addEventListener("click", async function () {
  try {
    const users = await fetchUsers();
    const template = generateTemplate(users);
    showTemplate(template);
  } catch (error) {
    console.log(error);
  }
});
