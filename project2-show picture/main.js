// Bước 1: lấy các phần tử
const btnElement = document.getElementById("btn");
const imgElement = document.getElementById("image");

// Bước 2: lấy dữ liệu từ api
const URL = "https://dog.ceo/api/breeds/image/random";

function fetchRandomImage() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      imgElement.setAttribute("src", data.message);
    })
    .catch((err) => console.log(err));
}

fetchRandomImage();

// Bước 3: đăng ký event click cho button element
btnElement.addEventListener("click", function () {
  fetchRandomImage();
});
