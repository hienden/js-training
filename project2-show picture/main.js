const btnElement = document.getElementById("btn");
const imgElement = document.getElementById("image");

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

btnElement.addEventListener("click", function () {
  fetchRandomImage();
});
