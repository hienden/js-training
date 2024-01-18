const submitButton = document.querySelector(".submit-btn");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const emailPattern =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const isRequired = (inputElement) => {
  console.log(inputElement);
  const errorMessage = inputElement.parentElement.querySelector(".error");
  if (!inputElement.value) {
    inputElement.parentElement.classList.add("error");
    // mai lam
    errorMessage.textContent = `${inputElement.id} la thong tin bat buoc`;
    return false;
  } else {
    inputElement.parentElement.classList.remove("error");
    inputElement.parentElement.classList.add("success");
    errorMessage.textContent = "";
    return true;
  }
};
const isEmailValid = () => {};
const isPasswordValid = () => {};
const isConfirmPasswordValid = () => {};

submitButton.addEventListener("click", function (event) {
  // ngăn chặn hành vi mặc định của phần tử
  event.preventDefault();
  // xác thực dữ liệu user nhập vào ô input có hợp lệ hay không

  isRequired(username);

  if (!isRequired(username)) return;

  if (!isRequired(email)) return;

  if (!emailPattern.test(email.value)) {
    const errorMessage = email.parentElement.querySelector(".error");
    email.parentElement.classList.add("error");
    errorMessage.textContent = "email la khong dung dinh dang";
  }

  if (!isRequired(password)) return;
  if (password.value.length < 8) {
    const errorMessage = password.parentElement.querySelector(".error");
    password.parentElement.classList.add("error");
    errorMessage.textContent = "password it nhat phai co 8 ky tu";
  }

  if (!isRequired(confirmPassword)) return;
  if (confirmPassword.value !== password.value) {
    const errorMessage = confirmPassword.parentElement.querySelector(".error");
    confirmPassword.parentElement.classList.add("error");
    errorMessage.textContent = "mat khau khong khop";
  }

  // Gủi thông tin hợp lệ cho máy chủ
  //.......
  console.log({
    username: username.value,
    email: email.value,
    password: password.value,
  });
});
