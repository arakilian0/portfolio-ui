let toolsHelpModalTrigger = document.querySelector(".tools-help-modal-trigger");
let toolsHelpModalHeader = document.querySelector(".tools-help-modal-header");

toolsHelpModalTrigger.addEventListener("click", function(event1) {
	// console.log(event.target.children[0]);
	event.target.children[0].style.display = "block";
	// event.target.children[0].style.animation = "toolsHelpAnimation 0.8s";
});

toolsHelpModalHeader.addEventListener("click", function(event2) {
	// console.log("closer was clicked");
	if(event.target.parentNode.classList[0] == "tools-help-modal") {
		event.target.parentNode.style.display = "none";
	}
	else {
		event.target.parentNode.parentNode.style.display = "none";
	}
	// setTimeout(function() {
	// 	event.target.parentElement.style.display = "none";
	// }, 800);
});
