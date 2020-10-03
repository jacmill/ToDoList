var taskTitle;
var taskDesc;
var todoCont = document.getElementById("TodoContainer");
var taskNodeList = document.getElementsByClassName("Task");
document.getElementById("SubmitButton").addEventListener("click", createTask);

function createTask() {
  //set form values as variables
  taskTitle = document.getElementById("TaskName").value;
  taskDesc = document.getElementById("Description").value;
  // Title of Task
  var titleNode = document.createElement("h1");
  titleNode.className = "Title";
  // Description of Task
  var descNode = document.createElement("p");
  descNode.className = "Description";
  // Close Button
  var deleteButtonWrapper = document.createElement("span");
  deleteButtonWrapper.className = "deleteButton";
  var btnImg = document.createElement("img");
  btnImg.className = "btnImg";

  btnImg.setAttribute("src", "../images/trashcan.svg");
  deleteButtonWrapper.appendChild(btnImg);

  descNode.appendChild(document.createTextNode(taskDesc));
  titleNode.appendChild(document.createTextNode(taskTitle));

  var task = document.createElement("div");
  task.className = "Task";
  var taskCont = document.createElement("div");
  taskCont.className = "TaskContainer";

  task.appendChild(taskCont);
  taskCont.appendChild(titleNode);
  taskCont.appendChild(descNode);
  task.appendChild(deleteButtonWrapper);

  if (taskTitle == "" || taskDesc == "") {
    alert("You must write something");
  } else {
    todoCont.appendChild(task);
  }

  document.getElementById("modalBox").style.visibility = "hidden";
  document.getElementById("main").style.filter = "none";
  document.getElementById("TaskName").value = "";
  document.getElementById("Description").value = "";
}
var close = document.getElementsByClassName("deleteButton");
for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        todoCont.removeChild(taskNodeList[i]);
    }
}