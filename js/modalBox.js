document.getElementById("createTask").addEventListener("click", openModal);
document.getElementById("closeModalTaskBox").addEventListener("click", closeModal); 

function openModal() {
  document.getElementById("modalBox").style.visibility = "visible";
  document.getElementById("main").style.filter = "brightness(50%)";
}
function closeModal() {
  document.getElementById("modalBox").style.visibility = "hidden";
  document.getElementById("main").style.filter = "none";
}
