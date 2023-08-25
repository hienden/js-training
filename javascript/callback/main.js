// 1. Định Nghĩa callback
//là hàm
//là đồi số truyền vào của 1 function
// function myFunction(params) {
//   params("Hoc lap trinh");
// }
// function myCallback(value) {
//   console.log("value:", value);
// }
// myFunction(myCallback);

// function myFunction(params) {
//   console.log(this);
//   // console.log("hello");
// }
// myFunction();

var listCoursesBlock = document.querySelector("#list-courses");
var courseApi = "http://localhost:3000/courses";

function generateCourses(courses) {
  return courses.map(function (course) {
    return `
        <li>
          <h4>${course.name}</h4>
          <p>${course.description}</p>
        </li>
    `;
  });
}

function renderCourses(template) {
  document.getElementById("list-courses").innerHTML = template.join("");
}

fetch(courseApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (courses) {
    const template = generateCourses(courses);
    renderCourses(template);
  });
