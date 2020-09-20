document.getElementById("createTask").addEventListener("click", openModal);
document.getElementById("closeModalTaskBox").addEventListener("click", closeModal);

function openModal() {
	document.getElementById("modalBox").style.display = "block";
	document.getElementById("container").style.filter = "brightness(50%)";
}
function closeModal(){
	document.getElementById("modalBox").style.display = "none";
	document.getElementsById("container").style.filter = "brightness(100%)";
    console.log("also works");
}
