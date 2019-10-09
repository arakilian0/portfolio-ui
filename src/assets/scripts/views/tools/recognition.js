let toolsHelpModalTrigger = document.querySelector(".tools-help-modal-trigger");

toolsHelpModalTrigger.addEventListener("click", function(event) {
	// console.log(event.target.children[0]);
	event.target.children[0].style.display = "block";
});
