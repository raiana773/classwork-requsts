const API = "http://localhost:8000/todos";
let inpAdd = document.getElementById("inp-add");
let btnAdd = document.getElementById("btn-add");
console.log(inpAdd, btnAdd);
btnAdd.addEventListener("click", async function () {
  let newTodo = {
    todo: inpAdd.value,
  };
  console.log(newTodo);
  if (inpAdd.value.trim() === "") {
    alert("type in");
    return;
  }
  await fetch(API, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
  getTodos();
  inpAdd.value = "";
});
let list = document.getElementById("list");
async function getTodos() {
  let response = await fetch(API)
    .then(res => res.json())
    .catch(err => console.log(err));
  list.innerHTML = "";
  // console.log(response);
  response.forEach(item => {
    let newElem = document.createElement("div");
    newElem.innerHTML = `${item.todo}`;
    list.append(newElem);
  });
}

getTodos();
