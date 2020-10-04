const todoInput = document.querySelectorAll(".todoInput");
const todoList = document.querySelectorAll(".taskList");
document.getElementById("SubmitButton").addEventListener("click", createTask);

for (var i = 0; i < todoList.length; i++) {
  todoList[i].addEventListener("click", deleteCheck);
}

function createTask() {
  //Task div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoTask");
  //Task text container
  const todoTextCont = document.createElement("li");
  todoTextCont.classList.add("todoTextCont");
  //Task title
  const todoTitle = document.createElement("h1");
  todoTitle.classList.add("todoTitle");
  todoTitle.innerText = todoInput[0].value;
  todoTextCont.appendChild(todoTitle);
  //Task description
  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todoDesc");
  todoDescription.innerText = todoInput[1].value;
  todoTextCont.appendChild(todoDescription);
  //Putting together text for task
  todoDiv.appendChild(todoTextCont);
  //Complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //Delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList[0].appendChild(todoDiv);
  //Reseting modal box after creating task
  todoInput[0].value = "";
  todoInput[1].value = "";
  document.getElementById("modalBox").style.visibility = "hidden";
  document.getElementById("main").style.filter = "none";
}

function deleteCheck(e) {
  const button = e.target;

  //Delete Task
  if (button.classList[0] === "trash-btn") {
    const parent = button.parentElement;
    parent.classList.add("shrink");
    parent.addEventListener("transitionend", function () {
      parent.remove();
    });
  }

  //Move Task to another section
  if (button.classList[0] == "complete-btn") {
    const parent = button.parentElement;
    var todoListArr = Array.prototype.slice.call(todoList);
    var index = todoListArr.indexOf(parent.parentElement);
    if (index != 2) {
      todoList[index + 1].appendChild(parent);
    }
  }
}
