const buttons = document.getElementsByTagName("button");
const reset = document.querySelector("#reset");

const counterValue = document.querySelector("#counter_value");
counterValue.textContent = "0";
console.log(buttons);

[...buttons].forEach((button) => {
  button.addEventListener("click", function () {
    const buttonType = this.dataset.buttonType;

    switch (buttonType) {
      case "increase":
        counterValue.textContent = (+counterValue.textContent + 1).toString();
        break;

      case "decrease":
        counterValue.textContent = (+counterValue.textContent - 1).toString();
        break;

      default:
        counterValue.textContent = "0";
        break;
    }
    // if (buttonType === "increase") {
    // 	counterValue.textContent = (+counterValue.textContent + 1).toString();
    // } else if (buttonType === "decrease") {
    // 	counterValue.textContent = (+counterValue.textContent - 1).toString();
    // } else {
    // 	counterValue.textContent = "0";
    // }
  });
});
