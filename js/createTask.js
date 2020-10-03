var taskTitle;
var taskDesc;
var todocont = document.getElementById("TodoContainer");

document.getElementById("SubmitButton").addEventListener("click", createTask);


function createTask(){
    taskTitle = document.getElementById("TaskName").value;
    taskDesc = document.getElementById("Description").value;
    var titleNode = document.createElement("h1");
    titleNode.className = "Title";
    var descNode = document.createElement("p");
    descNode.className = "Description";
    descNode.appendChild(document.createTextNode(taskDesc));
    titleNode.appendChild(document.createTextNode(taskTitle));

    var task = document.createElement("div");
    task.className = "Task";
    task.appendChild(titleNode);
    task.appendChild(descNode);
    /*
    li.appendChild(title);
    li.appendChild(desc);
    */
    if (taskTitle =="" || taskDesc == ""){
        alert("You must write something");
    }
    else{
        todocont.appendChild(task);
    }

    document.getElementById("modalBox").style.visibility = "hidden";
    document.getElementById("main").style.filter = "none";
    document.getElementById("TaskName").value = "";
    document.getElementById("Description").value = "";
}