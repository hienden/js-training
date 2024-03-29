const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

const getSlideInfo = () => {
  const slides = nextButton
    .closest("[data-carousel]")
    .querySelector("[data-slides]");
  console.log(slides);

  const slideItems = slides.children;
  console.log(slideItems);

  // lấy ra slide item mà đang active
  const activeSlide = slides.querySelector("[data-active]");

  // lấy ra current index của slide item
  const currentIndex = [...slideItems].indexOf(activeSlide);

  return { currentIndex, slideItems };
};

function handPrevOrNextSlide() {
  console.log(this.dataset);
  const { currentIndex, slideItems } = getSlideInfo();
  const offset = this.dataset.carouselButton === "next" ? 1 : -1;

  let newIndex = currentIndex + offset;
  if (newIndex > slideItems.length - 1) newIndex = 0;
  if (newIndex < 0) newIndex = slideItems.length - 1;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;
}

nextButton.addEventListener("click", handPrevOrNextSlide);
previousButton.addEventListener("click", handPrevOrNextSlide);

setInterval(function () {
  const { currentIndex, slideItems } = getSlideInfo();

  let newIndex = currentIndex + 1;
  if (newIndex > slideItems.length - 1) newIndex = 0;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;
}, 6000);
