const toggleMenu = document.getElementById("toggle-menu");
const menuList = document.getElementById("menu-list");

toggleMenu.addEventListener("click", function () {
  menuList.classList.toggle("show-list");
});
