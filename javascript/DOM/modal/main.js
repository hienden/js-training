const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector(".close");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", function () {
  modal.style = "display: block";
});

closeModal.addEventListener("click", function (event) {
  console.log(this); //    <span class="close">x</span>
  console.log(event.target); //<span class="close">x</span>
  console.log(event); //PointerEvent
  modal.style = "display: none";
});

window.addEventListener("click", function (event) {
  console.log(event.target); // element thực hiện sự kiện click
  if (event.target === modal) {
    modal.style = "display: none";
  }
});
