let listContainerEl =document.getElementById("listContainer");
let addButtonEl = document.getElementById("addButton");

let todoArray = [
    {
        text:"Html",
        uniqueId:1
    },
    {
        text:"Css",
        uniqueId:2
    },
    {
        text:"Sql",
        uniqueId:3
    },
    {
        text:"Javascript",
        uniqueId:4
    },
]

let todoCount = todoArray.length;

function onStatusChange(labelId){
    let labelIdEl = document.getElementById(labelId);
    labelIdEl.classList.toggle("label")
}
function onDeleteItems(todoId){
    let todoIdEl = document.getElementById(todoId);
    listContainerEl.removeChild(todoIdEl);

}



function createAndAppend(todo){
    let todoId = "todo" +todo.uniqueId;
    let checkboxId = "checkbox" +todo.uniqueId;
    let labelId = "label"+todo.uniqueId;
    

let listEl = document.createElement("li");
listEl.classList.add("d-flex", "flex-row");
listEl.id = todoId;
listContainerEl.appendChild(listEl);

let inputEl = document.createElement("input");
inputEl.type="checkbox";
inputEl.classList.add("check-box");
inputEl.id=checkboxId;
inputEl.onclick=function(){
    onStatusChange(labelId)
}
listEl.appendChild(inputEl);

let labelContainerEl = document.createElement("div");
labelContainerEl.classList.add("d-flex", "flex-row","justify-content-between","label-container","mb-5");
listEl.appendChild(labelContainerEl);

let lbelEl = document.createElement("label");
lbelEl.setAttribute("for",checkboxId);
lbelEl.classList.add("m-3")
lbelEl.id=labelId;
lbelEl.textContent = todo.text;
labelContainerEl.appendChild(lbelEl);

let createDeleteConatiner = document.createElement("div");
createDeleteConatiner.classList.add("delete-icon-container");
labelContainerEl.appendChild(createDeleteConatiner);

let createDeleteIcon = document.createElement("i");
createDeleteIcon.classList.add("far", "fa-trash-alt", "delete-icon","mr-5","m-3");
createDeleteIcon.onclick=function(){
    onDeleteItems(todoId);
}
createDeleteConatiner.appendChild(createDeleteIcon);

}

for(let todo of todoArray){
    createAndAppend(todo);
}

function onAddTodo(){
    let userInput = document.getElementById("inputVal");
    let userValues = userInput.value;

    if(userValues === ""){
        alert("Please Enter Value")
    }
    todoCount = todoCount+1

    let newTodo ={
        text:userValues,
        uniqueId:todoCount
    }
    createAndAppend(newTodo);
    userInput.value = ""
}


addButtonEl.onclick =function(){
    onAddTodo()
}