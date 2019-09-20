let navBars = document.querySelector(".nav-bars");
let mobileHeader = document.querySelector(".mobile-header");
let navCloser = document.querySelector(".nav-closer");
let htmlTag = document.querySelector('html');

navBars.addEventListener("click", function() {
	mobileHeader.style.display = "block";
	// htmlTag.style.overflow = "hidden";
});

navCloser.addEventListener("click", function() {
	mobileHeader.style.display = "none";
	// htmlTag.style.overflow = "auto";
});
