let loaderContainer = document.querySelector(".loader-container");
let loaderIcon = document.querySelector(".loader-icon");
let htmlTag = document.querySelector("html");

function spinLoader() {
	// console.log(loaderIcon);
	let startDeg = 0;
	let loaderAnimation = setInterval(function() {
		startDeg += 20;
		// console.log(startDeg);
		loaderIcon.style.transform = `rotate(${startDeg}deg)`;
	}, 60);
	setTimeout(function() {
		clearInterval(loaderAnimation);
	}, 15000);
};

function closeLoader() {
	loaderContainer.classList.add("loader-closer-animation");
	setTimeout(function() {
		loaderContainer.style.display = "none";
	}, 800);
};

if(document.readyState === "ready" || document.readyState === "complete") {
	closeLoader();
	htmlTag.classList.remove("overflow-hidden");
} else {
	spinLoader();
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      closeLoader();
			htmlTag.classList.remove("overflow-hidden");
    }
  }
}
