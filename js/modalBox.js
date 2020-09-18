document.getElementById("createTask").addEventListener("click", openModal);
document.getElementById("closeModalTaskBox").addEventListener("click", closeModal);
function openModal() {
	document.getElementById("modalBox").style.display = "block";
	document.getElementById("body").style.filter = "brightness(50%)";
    console.log("works");
}
function closeModal(){
	document.getElementById("modalBox").style.display = "none";
	document.getElementsById("body").style.filter = "brightness(1)";
    console.log("also works");
}
