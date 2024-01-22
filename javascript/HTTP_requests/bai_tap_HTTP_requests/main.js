const titleInputElement = document.getElementById("title");
const descInputElement = document.getElementById("desc");
const addPostButton = document.getElementById("add-post");
const postListElement = document.querySelector(".post-list");

let currentId = "";

// "http://localhost:3000/posts"; - api (application program interface)
// localhost (127.0.0.1) - may ca nhan cua minh
// :3000 - ung dung quan ly bai viet dang o cong 3000 (port)
const URL = "http://localhost:3000/posts"; // sau nay - http://hien.com/posts

/**
 * Yeu cau: Tao 1 ung dung quan ly bai viet
 * Gom 4 chuc nang:
 *   1. Hien thi danh sach bai viet
 *   2. Them moi 1 bai viet
 *   3. Sua bai viet
 *   4. Xoa bai viet
 */

// Hàm render: Hiển thị ra màn hình
const renderPost = (postList) => {
  const posts = postList.map((item) => {
    return `<li id="${item.id}">
        <h4>${item.title}</h4>
        <p>${item.body}</p>
        <button onclick="handleDelete('${item.id}')">xoa</button>
        <button onclick="handleEdit('${item.id}')">sua</button>
      </li>`;
  });
  postListElement.innerHTML = posts.join("");
};

// GET API : hien thi danh sach bai viet
fetch(URL)
  .then((res) => res.json()) // bien doi ve kieu du lieu array hoac obj
  .then((data) => {
    renderPost(data);
  })
  .catch((err) => {
    console.log(err);
  });

// POST API : them moi 1 bai viet
addPostButton.addEventListener("click", function (e) {
  e.preventDefault();
  const title = titleInputElement.value;
  const desc = descInputElement.value;
  if (!title || !desc) {
    alert("vui long nhap gia tri");
    return;
  }

  const payload = {
    title: title,
    body: desc,
  };
  console.log(currentId);
  currentId
    ? fetch(`${URL}/${currentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const postItem = document.getElementById(currentId);
          console.log(postItem);
          postItem.querySelector("h4").textContent = data.title;
          postItem.querySelector("p").textContent = data.body;
          // console.log(data);
          titleInputElement.value = " ";
          descInputElement.value = " ";
          addPostButton.textContent = "Add post";
          console.log(currentId);
          currentId = false;
        })
    : fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          const post = `<li id="${data.id}">
            <h4>${data.title}</h4>
            <p>${data.body}</p>
            <button onclick="handleDelete('${data.id}')">xoa</button>
            <button onclick="handleEdit('${data.id}')">sua</button>
          </li>`;
          console.log(postListElement);
          console.log(postListElement.firstElementChild);
          if (postListElement.firstElementChild) {
            postListElement.firstElementChild.insertAdjacentHTML(
              "beforebegin",
              post
            );
          } else {
            postListElement.innerHTML = post;
          }

          titleInputElement.value = " ";
          descInputElement.value = " ";
        });
});

// PUT API: cập nhật 1 BAI VIET CU THE THEO ID
function handleEdit(id) {
  const postItem = document.getElementById(id);
  console.log(postItem);
  const title = postItem.querySelector("h4").textContent;
  const desc = postItem.querySelector("p").textContent;

  titleInputElement.value = title;
  descInputElement.value = desc;
  currentId = id;

  addPostButton.textContent = "Edit post";
}

// DELETE API : xóa post
function handleDelete(id) {
  fetch(URL + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const post = document.getElementById(id);
      post.remove();
      console.log(post);
    });
}
