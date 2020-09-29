document.getElementById("createTask").addEventListener("click", openModal);
document.getElementById("closeModalTaskBox").addEventListener("click", closeModal); 

function openModal() {
  document.getElementById("modalBox").style.display = "block";
  document.getElementById("main").style.filter = "brightness(50%)";
}
function closeModal() {
  document.getElementById("modalBox").style.display = "none";
  document.getElementById("main").style.filter = "none";
}
