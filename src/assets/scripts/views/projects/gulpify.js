let projectContributerControl = document.querySelectorAll('.project-contributer-control');

projectContributerControl.forEach((e) => {

	e.addEventListener('mouseover', function(event) {
		let firstChild = e.firstChild.nextElementSibling;
		firstChild.style.display = "block";
	});

	e.addEventListener('mouseout', function(event) {
		let firstChild = e.firstChild.nextElementSibling;
		firstChild.style.display = "none";
	});

});
