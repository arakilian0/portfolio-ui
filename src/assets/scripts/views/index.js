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
let htmlTag = document.querySelector('html');
let resumeCloser = document.querySelector('.resume-closer');
let flippedFooter = document.querySelector('.flipped-footer');
let footerTag = document.querySelector('footer');
let stars1 = document.querySelector('#stars');
let stars2 = document.querySelector('#stars2');
let stars3 = document.querySelector('#stars3');


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
	// footerTag.style.opacity = "0";
	flipBoxContainer.style.transform = "rotateY(-180deg)";
	flipBoxContainer.style.transition = "transform 1.6s";
	// flippedFooter.style.display = "block";
	flipBoxBackContent.style.animation = "animFlipBackBoxContentOP 0.8s";
	flipBoxFront.style.animation = "animFlipBackBoxContent 0.8s";
	setTimeout(function() {
		// footerTag.style.display = "none";
		flipBoxBackContent.style.display = "block";
		// flippedFooter.style.display = "none";
		flipBoxFront.style.display = "none";
		stars1.style.width = "0";stars1.style.height = "0";
		stars2.style.width = "0";stars2.style.height = "0";
		stars3.style.width = "0";stars3.style.height = "0";
	}, 600);
});

resumeCloser.addEventListener("click", function() {
	flipBoxContainer.style.transform = "rotateY(0deg)";
	flipBoxContainer.style.transition = "transform 1.6s";
	// flipBoxBackContent.style.display = "none";
	// footerTag.style.display = "none";
	// flipBoxBackContent.style.animation = "animFlipBackBoxContent 0.6s";
	flipBoxBackContent.style.animation = "animFlipBackBoxContent 0.6s";
	flipBoxFront.style.animation = "animFlipBackBoxContentOP 0.6s";
	setTimeout(function() {
		flipBoxFront.style.display = "block";
		flipBoxBackContent.style.display = "none";
		// flippedFooter.style.display = "block";
		stars1.style.width = "1px";stars1.style.height = "1px";
		stars2.style.width = "2px";stars2.style.height = "2px";
		stars3.style.width = "2.5px";stars3.style.height = "2.5px";
	}, 600);
});
