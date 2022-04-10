const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

//adding the todo in the list
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const todoValue = document.querySelector(".todo-input").value;
  todo.value = "";
  storeTodos(todoValue);
  markfunc();
  deletefunc();
});

function storeTodos(newTodo) {
  const todo = {
    content: newTodo,
    toggler: false,
  };
  if (localStorage.getItem("todos") === null) {
    let data = [];
    data.push(todo);
    localStorage.setItem("todos", JSON.stringify(data));
  } else {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = [...data, todo];
    localStorage.setItem("todos", JSON.stringify(data));
  }
}

function renderList(data) {
  const listitem = document.createElement("li");
  const markButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  markButton.textContent = "tick";
  markButton.classList.add("btn");
  markButton.classList.add("mark-btn");

  deleteButton.textContent = "delete";
  deleteButton.classList.add("btn");
  deleteButton.classList.add("delete-btn");

  listitem.textContent = data.content;
  listitem.className = "todo-item";
  if (data.toggler === false) {
    listitem.classList.remove("mark");
  } else if (data.toggler === true) {
    listitem.classList.add("mark");
  }
  listitem.appendChild(markButton);
  listitem.appendChild(deleteButton);
  list.appendChild(listitem);
}

function display() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach((data) => {
    renderList(data);
  });
}
display();

function deletefunc() {
  const btns = document.querySelectorAll(".delete-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
}

function markfunc() {
  const btns = document.querySelectorAll(".mark-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const element = e.target.parentElement;
      const data=element.firstChild.textContent;
      if(element.classList("mark")){
        element.classList.remove("mark");
        let data = JSON.parse(localStorage.getItem("todos"));
        data.includes({content:})
      }else{
        element.classList.add("mark");
      }
    });
  });
}
