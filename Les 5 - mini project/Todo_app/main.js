// Finding Elements 
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector("#inputToDo");
const toDoAddBtn = document.querySelector("#addToDoBtn");
const toDoList = document.querySelector("#lists");

// add Todo Fnction 
const addToDo = (event) => {
    event.preventDefault();
    const toDoValue = toDoInput.value


    // unique Id 
    const toDoid = Date.now().toString();
    createToDo(toDoid, toDoValue);

};

// adding Listeners 
todoForm.addEventListener("submit", addToDo);