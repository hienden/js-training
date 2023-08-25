var users = [
  {
    id: 1,
    name: "Kien Dam",
  },
  {
    id: 2,
    name: "Son Dang",
  },
  {
    id: 3,
    name: "Hung Dam",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Anh son chua ra video",
  },
  {
    id: 2,
    user_id: 2,
    content: "vua ra xong em oi",
  },
];
function getComments() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}
var list_users_id = [1, 2];

function getUsersByIds(list_users_id) {
  return new Promise(function (resolve, reject) {
    var result = users.filter(function (user) {
      return list_users_id.includes(user.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    //   console.log(comments);
    var list_users_id = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(list_users_id).then(function (users) {
      return {
        a: users,
        b: comments,
      };
    });
  })
  .then(function (data) {
    console.log(data);
  });
