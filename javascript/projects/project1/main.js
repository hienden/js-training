const displayElement = document.getElementById("display-user");
const userListElement = document.querySelector(".user-list");

displayElement.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const users = data.map((use) => {
        return `<li id="${use.id}">
            <h4>${use.username}</h4>
            <p>${use.email}</p>
            <p>${use.phone}</p>
          </li>`;
      });
      userListElement.innerHTML = users.join("");
    });
});
