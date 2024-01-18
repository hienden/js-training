const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");
const menuList = document.getElementById("menu-list");
const main = document.getElementById("main");

toggleMenu.addEventListener("click", function () {
  menuList.classList.toggle("show-list");
  main.classList.toggle("margin-left");
});
closeMenu.addEventListener("click", function () {
  menuList.classList.toggle("show-list");
  main.classList.toggle("margin-left");
});
