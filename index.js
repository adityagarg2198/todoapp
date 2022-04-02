const todo = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");
let todoValue;

//getting the todo value
todo.addEventListener("change", (e) => {
  todoValue = todo.value;
});

//adding the todo in the list
addButton.addEventListener("click", (e) => {
  todo.value = "";
  e.preventDefault();
  const listitem = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "mark";
  button.className = "mark-btn";
  listitem.textContent = todoValue;
  listitem.appendChild(button);
  listitem.className = "todo-item";
  list.appendChild(listitem);
  markfunc();
});

function markfunc() {
  const btns = document.querySelectorAll(".mark-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.parentElement.classList.toggle('mark');
    });
  });
}
