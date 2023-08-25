// var listCoursesBlock = document.querySelector("h2");
// listCoursesBlock.id = "title";

// var listCoursesBlock = document.querySelector('h2[id="title"]');

// var courseApi = "http://localhost:3000/courses";

// //function
// function getCourses() {
//   return new Promise((resolve, reject) => {
//     fetch(courseApi)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (courses) {
//         resolve(courses);
//       })
//       .catch((err) => reject(err));
//   });
// }

// // const courses = getCourses();

// function generateCourses(courses) {
//   return courses.map(function (course) {
//     return `
//         <li>
//           <h4>${course.name}</h4>
//           <p>${course.description}</p>
//         </li>
//     `;
//   });
// }

// async function renderCourses() {
//   const coursess = await getCourses();
//   const template = generateCourses(coursess);
//   document.getElementById("list-courses").innerHTML = template.join("");
// }

// renderCourses();
////////////////
const courseApi = "http://localhost:3000/courses";

const createBtnElement = document.querySelector("#create");
const nameInputElement = document.querySelector('input[name="name"]');
console.log(nameInputElement);
const descriptionInputElement = document.querySelector(
  'input[name="description"]'
);
const coursesListElement = document.querySelector("#list-courses");

let isEdit = false;
let currentCourseId = null;

//function
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function createCourse(data, callback) {
  fetch(courseApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  fetch(courseApi + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(function (response) {
      response.json();
    })
    .then(function () {
      renderCourses(courses);
    });
}

function updateCource() {
  const payload = {
    name: nameInputElement.value,
    description: descriptionInputElement.value,
  };
  fetch(courseApi + "/" + currentCourseId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(function (response) {
      response.json();
    })
    .then(function () {
      renderCourses(courses);
    });
}

function handleEditCourse(id, name, description) {
  isEdit = true;
  currentCourseId = id;
  nameInputElement.value = name;
  descriptionInputElement.value = description;
  createBtnElement.textContent = "cập nhật";
}

function renderCourses(courses) {
  const template = courses.map(function (course) {
    return `
      <li class="course-item-${course.id}" >
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
        <button id="edit-course" onclick="handleEditCourse('${course.id}', '${course.name}', '${course.description}')">Chinh sua</button>
      </li>
    `;
  });
  coursesListElement.innerHTML = template.join("");
}

createBtnElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (!nameInputElement.value && !descriptionInputElement.value) return;

  const payload = {
    name: nameInputElement.value,
    description: descriptionInputElement.value,
  };

  if (isEdit) {
    updateCource();
  } else {
    createCourse(payload, function () {
      getCourses(renderCourses);
    });
  }
});

function start() {
  getCourses(renderCourses);
}
start();
