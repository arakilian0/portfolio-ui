let navBars = document.querySelector(".nav-bars");
let mobileHeader = document.querySelector(".mobile-header");
let navCloser = document.querySelector(".nav-closer");

navBars.addEventListener("click", function() {
	mobileHeader.style.display = "block";
});

navCloser.addEventListener("click", function() {
	mobileHeader.style.display = "none";
});
