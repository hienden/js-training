const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

nextButton.addEventListener("click", function () {
  // keyword this trong event listener thì nó sẽ đại diện cho cho phần tử html đang kích hoạt sự kiện
  // closet(): là method sẽ tìm kiếm các phần tử trên DOM theo css selector mà m truyền vào, n sẽ tìm kiểm tổ tiên(cha, ông, cụ,..) của phần tử đang tham chiếu đến
  const slides = this.closest("[data-carousel]").querySelector("[data-slides]");
  const slideItems = slides.children; // html collections -> array js [...spread]

  // lấy ra slide item mà đang active
  const activeSlide = slides.querySelector("[data-active]");

  // lấy ra current index của slide item
  const currentIndex = [...slideItems].indexOf(activeSlide);
  let newIndex = currentIndex + 1;

  if (newIndex > slideItems.length - 1) newIndex = 0;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;

  // dots:
  const dots = this.closest("[data-carousel]").querySelector("[data-dots]");
  const dotItems = dots.children; // html collections -> array js [...spread]
  // console.log(dotItems);

  // lấy ra dot item mà đang active
  const activeDot = dots.querySelector("[data-active]");

  // lấy ra current index của dot active item
  const currentIndexDot = [...dotItems].indexOf(activeDot);
  let newIndexDot = currentIndexDot + 1;

  if (newIndexDot > dotItems.length - 1) newIndexDot = 0;

  dotItems[newIndexDot].dataset.active = true;
  delete dotItems[currentIndexDot].dataset.active;
});

previousButton.addEventListener("click", function () {
  // keyword this trong event listener thì nó sẽ đại diện cho cho phần tử html đang kích hoạt sự kiện
  // closet(): là method sẽ tìm kiếm các phần tử trên DOM theo css selector mà m truyền vào, n sẽ tìm kiểm tổ tiên(cha, ông, cụ,..) của phần tử đang tham chiếu đến
  const slides = this.closest("[data-carousel]").querySelector("[data-slides]");
  const slideItems = slides.children; // html collections -> array js

  // lấy ra slide item mà đang active
  const activeSlide = slides.querySelector("[data-active]");

  // lấy ra current index của slide item
  const currentIndex = [...slideItems].indexOf(activeSlide);
  let newIndex = currentIndex - 1;

  if (newIndex < 0) newIndex = slideItems.length - 1;
  //   if (newIndex > slideItems.length - 1) newIndex = 0;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;

  // dots:
  const dots = this.closest("[data-carousel]").querySelector("[data-dots]");
  const dotItems = dots.children; // html collections -> array js [...spread]

  // lấy ra dot item mà đang active
  const activeDot = dots.querySelector("[data-active]");

  // lấy ra current index của dot active item
  const currentIndexDot = [...dotItems].indexOf(activeDot);
  let newIndexDot = currentIndexDot - 1;

  if (newIndexDot < 0) newIndexDot = dotItems.length - 1;

  dotItems[newIndexDot].dataset.active = true;
  delete dotItems[currentIndexDot].dataset.active;
});

// cú pháp: setInterval(function() {}, timer) - timer tính ms 1000ms = 1s
// Phương thức setInterval() gọi một hàm hoặc đánh giá một biểu thức sau
// một khoảng thời gian xác định (tính bằng mili giây).
//Tuy nhiên, số lần gọi hàm là liên tục, nó sẽ thực hiện
// lặp đi lặp lại cho đến khi phương thức clearInterval() được gọi hoặc cửa sổ bị đóng (tải lại trang).

// const intervalId = setInterval(function () {}, timer);

setInterval(function () {
  const slides = nextButton
    .closest("[data-carousel]")
    .querySelector("[data-slides]");
  const slideItems = slides.children; // html collections -> array js

  // lấy ra slide item mà đang active
  const activeSlide = slides.querySelector("[data-active]");

  // lấy ra current index của slide item
  const currentIndex = [...slideItems].indexOf(activeSlide);
  let newIndex = currentIndex + 1;

  if (newIndex > slideItems.length - 1) newIndex = 0;

  slideItems[newIndex].dataset.active = true;
  delete slideItems[currentIndex].dataset.active;

  // dot
  const dots = previousButton
    .closest("[data-carousel]")
    .querySelector("[data-dots]");
  const dotItems = dots.children; // html collections -> array js [...spread]

  // lấy ra dot item mà đang active
  const activeDot = dots.querySelector("[data-active]");

  // lấy ra current index của dot active item
  const currentIndexDot = [...dotItems].indexOf(activeDot);
  let newIndexDot = currentIndexDot + 1;

  if (newIndexDot > dotItems.length - 1) newIndexDot = 0;

  dotItems[newIndexDot].dataset.active = true;
  delete dotItems[currentIndexDot].dataset.active;
}, 6000);
