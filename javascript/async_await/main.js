// async & await là 1 Promise

const getNewTodo = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let data = await response.json();
  return data;
};
// async function getNewTodo() {

// }

getNewTodo().then(function (data) {
  console.log(data);
});

//GET để lấy dữ liệu trên server
//POST để thêm mới hoặc cập nhập dữ liệu trên server
//PUT chỉ để cập nhật dữ liệu đã có trên server và phải cập nhật toàn bộ dữ liệu của đối tượng
//PATCH tương tự như POST và PUT chỉ đẻ cập nhật 1 phần dữ liệu của đối tượng
//DELETE để xóa dữ liệu trên server thông qua API
