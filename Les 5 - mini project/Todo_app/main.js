// Finding Elements 
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector("#inputToDo");
const toDoAddBtn = document.querySelector("#addToDoBtn");
const toDoList = document.querySelector("#lists");
const msgElement = document.querySelector("#msg");

// show MSG 
const showMsg = (text, status) => {
    msgElement.textContent = "text";
    msgElement.classList.add(`bg-${status}`);
    setTimeout(() => {
        msgElement.textContent = "";
        msgElement.classList.remove(`bg-${status}`);
    }, 1000);
};



// create ToDo 
const createToDo = (toDoid, toDoValue) => {
    const todoElement = document.createElement("li");
    todoElement.id = toDoid;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
        <span>${toDoValue}</span>
        <span><button class="btnTodo" id="deletebtn">
            <i class="fa fa-trash"></i>
        </button></span>
    `;
    toDoList.appendChild(todoElement);
};

// add Todo Fnction 
const addToDo = (event) => {
    event.preventDefault();
    const toDoValue = toDoInput.value;


    // unique Id 
    const toDoid = Date.now().toString();
    createToDo(toDoid, toDoValue);
    showMsg("Todo is Added", "success");

    // localStorage 
    const todos = localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];
    todos.push({ toDoid, toDoValue });
    localStorage.setItem("mytodos", JSON.stringify(todos));
    toDoInput.value = "";

};

// adding Listeners 
todoForm.addEventListener("submit", addToDo);