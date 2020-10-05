let tasks = document.querySelectorAll(".todoTask");
tasks.forEach(function(task){
    task.addEventListener("drag", onDragHandler);
    task.addEventListener("dragstart", onDragStartHandler);
    task.addEventListener("dragend", onDragEndHandler);
});
let lists = document.querySelectorAll(".taskList");
lists.forEach(function(list){
    list.addEventListener("dragover", onDragOverHandler);
    list.addEventListener("dragleave", onDragLeaveHandler);
});
function onDragHandler(e){
    console.log("drag");
}

function onDragStartHandler(){
    this.style.opacity = "0.4";
    console.log("hey");
}

function onDragEndHandler(){
    this.style.opacity = "1";
    console.log("hey");

}

function onDragOverHandler(){
    this.style.border = "solid black 10px";
}

function onDragLeaveHandler(){
    this.style.border = "none";
}