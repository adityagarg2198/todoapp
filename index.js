const todo=document.querySelector('.todo-input');
const addButton=document.querySelector('.add-button');
const list=document.querySelector('.list');
let todoValue;

//getting the todo value
todo.addEventListener('change',(e)=>{
    todoValue=todo.value;
})


//adding the todo in the list
addButton.addEventListener('click',(e)=>{
    todo.value='';
    e.preventDefault();
    const item=document.createElement('li');
    item.textContent=todoValue;
    item.className='todo-item';
    list.appendChild(item);
})
