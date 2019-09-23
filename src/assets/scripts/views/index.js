let navBars = document.querySelector(".nav-bars");
let mobileHeader = document.querySelector(".mobile-header");
let mobileHeaderBody = document.querySelector(".mobile-header-body");
let navCloser = document.querySelector(".nav-closer");
let heroTitle = document.querySelector(".hero-text-middle");

navBars.addEventListener("click", function() {
	mobileHeader.classList.remove('mobile-header-close-animation');
	mobileHeader.style.display = "block";
	heroTitle.style.display = "none";
	navCloser.style.display = "inline-block";
	mobileHeaderBody.style.display = "flex";
});

navCloser.addEventListener("click", function() {
	setTimeout(() => {
		mobileHeader.style.display = "none";
	},600);
	mobileHeader.classList.add('mobile-header-close-animation');
	heroTitle.style.display = "flex";
	navCloser.style.display = "none";
	mobileHeaderBody.style.display = "none";
});
