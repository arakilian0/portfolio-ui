let navBars = document.querySelector(".nav-bars");
let mobileHeader = document.querySelector(".mobile-header");
let mobileHeaderBody = document.querySelector(".mobile-header-body");
let navCloser = document.querySelector(".nav-closer");
let heroTitle = document.querySelector(".hero-text-middle");
let resumeBtn = document.querySelector(".button-resume");
let flipBox = document.querySelector(".flip-box");
let flipBoxFront = document.querySelector(".flip-box-front");
let flipBoxContainer = document.querySelector(".flip-box-container");
let flipBoxBackContent = document.querySelector(".flip-box-back-content");
let bodyTag = document.querySelector('body');
let resumeCloser = document.querySelector('.resume-closer');
let flippedFooter = document.querySelector('.flipped-footer');
let footerTag = document.querySelector('footer');

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

resumeBtn.addEventListener("click", function() {
	bodyTag.style.background = "#4b367c";
	flipBoxFront.style.display = "none";
	flipBoxContainer.style.transform = "rotateY(-180deg)";
	flipBoxContainer.style.transition = "transform 1.3s";
	flipBoxBackContent.style.display = "block";
});

resumeCloser.addEventListener("click", function() {
	bodyTag.style.background = "#19171c";
	flipBoxContainer.style.transform = "rotateY(0deg)";
	flipBoxContainer.style.transition = "transform 1.3s";
	// flipBoxBackContent.style.display = "none";
	flippedFooter.style.display = "block";
	setTimeout(flipBoxFront.style.display = "block",2000);
	setTimeout(flipBoxBackContent.style.display = "none", 2000);
	footerTag.style.display = "none";
});
