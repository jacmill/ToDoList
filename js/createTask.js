var taskTitle;
var taskDesc;
document.getElementById("SubmitButton").addEventListener("click", getFormValues(), createTask());

function getFormValues(){
    taskTitle = document.getElementById("TaskName").value;
    taskDesc = document.getElementById("Description").value;
}

function createTask(){
    var task = document.createElement("div");
    task.setAttribute("class", "TaskBlock");
    task.textContent = "NEW";
    document.getElementById("TodoContainer").appendChild(task)
    console.log("helo");
}

window.onbeforeunload = function(){
    while (document.getElementById("TodoContainer").lastElementChild) {
        document.getElementById("TodoContainer").removeChild(document.getElementById("TodoContainer").lastElementChild);
      }
}