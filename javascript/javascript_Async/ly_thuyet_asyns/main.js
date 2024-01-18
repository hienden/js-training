// syns: đồng bộ nghĩa là thực hiện các công việc 1 cách tuần tự
// ví dụ cv1 phải xong thì được thực hiện cv2.

// async: bất đồng bộ -> nghĩa là thực hiện các công việc 1 cách
// không tuần tự
// ví dụ: trong khi chờ cơm chín thì mình có thể đi tắm.

function test1() {
  console.log(1);
  console.log(2);
  console.log(3);
}
test1(); // 1-2-3

function test2() {
  // setTimeout() là function B
  // () => console.log(1) là function A

  const print = () => console.log(1);
  setTimeout(print, 0);
  console.log(2);
  console.log(3);
}

// function setTimeout(callback, timer){
// callback()
// }

test2(); // 2-3-1

// callback: là 1 function A được truyền vào function B như 1 tham số
// của function B. B sẽ gọi đến A để thực hiện 1 chức năng nào đó
// mà A đang nắm giữ
function A(message) {
  console.log(message);
}
function testCallback(callback) {
  callback("message gi gi day");
}
testCallback(A);

// truyền trực tiếp vào  Không có tên function A
// testCallback(function (message) {
//   console.log(message);
// });

const getImageFromServer = (url, callback) => {
  const httpClient = new XMLHttpRequest();
  httpClient.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(httpClient.responseURL);
    }
  };
  httpClient.open("GET", url, true);
  httpClient.send();
};

// const showImage = (imageUrl) => {
//   document.querySelector("#img1").src = imageUrl;
// };

// getImageFromServer("https://picsum.photos/id/1/200/300", showImage);

getImageFromServer("https://picsum.photos/200/300", (imageUrl) => {
  document.querySelector("#img1").src = imageUrl;
  getImageFromServer("https://picsum.photos/200/300", (imageUrl) => {
    document.querySelector("#img2").src = imageUrl;
    getImageFromServer("https://picsum.photos/200/300", (imageUrl) => {
      document.querySelector("#img3").src = imageUrl;
    });
  });
});

// Promise là một đối tượng đại diện cho một giá trị chưa được biết trước, có thể là giá trị hoặc lỗi,
// và sẽ được trả về trong tương lai sau khi một tác vụ bất đồng bộ hoàn thành.
//Promise giúp chúng ta xử lý bất đồng bộ một cách sáng sủa hơn, tránh callback hell và làm mã nguồn dễ đọc hơn.

// đăng kí lời húa
const myPromise = new Promise((resole, reject) => {
  const condition = false;
  if (condition) {
    setTimeout(() => {
      resole("toi da thuc hien loi hua thanh cong");
    }, 3000);
  } else {
    reject("toi ban nen khong the giu loi hua");
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  // method chainning
  .catch((error) => {
    console.log(error);
  });

// myPromise.catch((error) => {
//   console.log(error);
// });

const getImageFromServer2 = (url, resole1, reject) => {
  const httpClient = new XMLHttpRequest();
  httpClient.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      resole1(httpClient.responseURL);
    }
    // else {
    //   reject("duong dan khong ton tai, vui long kiem tra lai");
    // }
  };
  httpClient.open("GET", url, true);
  httpClient.send();
};

const Promise1 = new Promise((resole, reject) => {
  getImageFromServer2("https://picsum.photos/200/300", resole, reject);
});

const Promise2 = new Promise((resole, reject) => {
  getImageFromServer2("https://picsum.photos/200/300", resole, reject);
});

const Promise3 = new Promise((resole, reject) => {
  getImageFromServer2("https://picsum.photos/200/300", resole, reject);
});

// Promise1.then((data) => {
//   document.querySelector("#img4").src = data;
//   return Promise2;
// })
//   .then((data) => {
//     document.querySelector("#img5").src = data;
//     return Promise3;
//   })
//   .then((data) => {
//     document.querySelector("#img6").src = data;
//   })
//   .catch((error) => {
//     document.querySelector("#message").textContent = error;
//   });
console.log("hien");
///////
// Promise1.then((data) => {
//   document.querySelector("#img4").src = data;
// }).catch((error) => {
//   document.querySelector("#message").textContent = error;
// });

// Promise2.then((data) => {
//   document.querySelector("#img5").src = data;
// }).catch((error) => {
//   document.querySelector("#message").textContent = error;
// });

// Promise3.then((data) => {
//   document.querySelector("#img6").src = data;
// }).catch((error) => {
//   document.querySelector("#message").textContent = error;
// });

// async/await function: async, await là 2 keyword được sử dụng cùng với function,
// để xử lý các công việc bất đồng bộ (promise)
// giúp thực hiện các công việc bất đồng bộ trở thành đồng bộ.

// công việc 1 xong mới thực hiện công việc 2
async function test() {
  try {
    const img1 = await Promise1;
    document.querySelector("#img4").src = img1;
    const img2 = await Promise2;
    document.querySelector("#img5").src = img2;
    const img3 = await Promise3;
    document.querySelector("#img6").src = img3;
  } catch (err) {
    console.log(err);
  }
}
test();
console.log("hoang");

// **Bài tập 8: Promises**
// 1. Viết một hàm "fetchData" sử dụng Fetch API để lấy dữ liệu từ một URL được cung cấp.
// Hàm này trả về một Promise với dữ liệu lấy được hoặc thông báo lỗi nếu xảy ra lỗi trong quá trình lấy dữ liệu.

//promise
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
}
// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async/await c1
async function fetchData1() {
  const api = await fetchData();
  console.log(api);
}
fetchData1();

// async/await c2
// async function fetchData1() {
//   await new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((user) => resolve(console.log(user)))
//       .catch((err) => reject(err));
//   });
// }
// fetchData1();
