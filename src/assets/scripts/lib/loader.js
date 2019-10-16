let loaderContainer = document.querySelector(".loader-container");
let loaderIcon = document.querySelector(".loader-icon");
let htmlTag = document.querySelector("html");
let docsMenu = document.querySelector(".docs-fixed-container");
let docsMenuDropdownTrigger1 = document.getElementById("#docsMenuDropdownTrigger1");
let docsMenuDropdownTrigger2 = document.getElementById("#docsMenuDropdownTrigger2");
let docsMenuDropdownTrigger3 = document.getElementById("#docsMenuDropdownTrigger3");
let docsMenuDropdownTrigger4 = document.getElementById("#docsMenuDropdownTrigger4");
let docsMenuDropdownTrigger5 = document.getElementById("#docsMenuDropdownTrigger5");
let docsMenuDropdown1 = document.getElementById("#docsMenuDropdown1");
let docsMenuDropdown2 = document.getElementById("#docsMenuDropdown2");
let docsMenuDropdown3 = document.getElementById("#docsMenuDropdown3");
let docsMenuDropdown4 = document.getElementById("#docsMenuDropdown4");
let docsMenuDropdown5 = document.getElementById("#docsMenuDropdown5");
let download1 = document.querySelector('#download1');
let download2 = document.querySelector('#download2');
let download3 = document.querySelector('#download3');
let downloadTrigger1 = document.querySelector('#downloadTrigger1');
let downloadTrigger2 = document.querySelector('#downloadTrigger2');
let downloadTrigger3 = document.querySelector('#downloadTrigger3');

function downloadMenuTogglers() {
	download1.style.display = "block";
	downloadTrigger1.style.background = "rgba(75,54,124,0.25)";

	downloadTrigger1.addEventListener('click', () => {
		download1.style.display = "block";
		download2.style.display = "none";
		download3.style.display = "none";
		downloadTrigger1.style.background = "rgba(75,54,124,0.25)";
		downloadTrigger2.style.background = "#4b367c";
		downloadTrigger3.style.background = "#4b367c";
	});
	downloadTrigger2.addEventListener('click', () => {
		download1.style.display = "none";
		download2.style.display = "block";
		download3.style.display = "none";
		downloadTrigger1.style.background = "#4b367c";
		downloadTrigger2.style.background = "rgba(75,54,124,0.25)";
		downloadTrigger3.style.background = "#4b367c";
	});
	downloadTrigger3.addEventListener('click', () => {
		download1.style.display = "none";
		download2.style.display = "none";
		download3.style.display = "block";
		downloadTrigger1.style.background = "#4b367c";
		downloadTrigger2.style.background = "#4b367c";
		downloadTrigger3.style.background = "rgba(75,54,124,0.25)";
	});
}

function docsMenuItemTogglers() {
	if(
		docsMenuDropdown1 &&
		docsMenuDropdown2 &&
		docsMenuDropdown3 &&
		docsMenuDropdown4 &&
		docsMenuDropdown5 &&
		docsMenuDropdownTrigger1 &&
		docsMenuDropdownTrigger2 &&
		docsMenuDropdownTrigger3 &&
		docsMenuDropdownTrigger4 &&
		docsMenuDropdownTrigger5
	) {
		docsMenuDropdown1.style.display = 'block';
		docsMenuDropdownTrigger1.childNodes[0].className = 'fa fa-caret-down';
		docsMenuDropdownTrigger1.addEventListener('click', () => {
			if(docsMenuDropdown1.style.display == 'block') {
				docsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
			else {
				docsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-down';
				docsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "block";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
		});
		docsMenuDropdownTrigger2.addEventListener('click', () => {
			if(docsMenuDropdown2.style.display == 'block') {
				docsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
			else {
				docsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-down';
				docsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "block";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
		});
		docsMenuDropdownTrigger3.addEventListener('click', () => {
			if(docsMenuDropdown3.style.display == 'block') {
				docsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
			else {
				docsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-down';
				docsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "block";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
		});
		docsMenuDropdownTrigger4.addEventListener('click', () => {
			if(docsMenuDropdown4.style.display == 'block') {
				docsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
			else {
				docsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-down';
				docsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "block";
				docsMenuDropdown5.style.display = "none";
			}
		});
		docsMenuDropdownTrigger5.addEventListener('click', () => {
			if(docsMenuDropdown5.style.display == 'block') {
				docsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "none";
			}
			else {
				docsMenuDropdownTrigger1.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger2.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger3.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger4.firstChild.className = 'fa fa-caret-right';
				docsMenuDropdownTrigger5.firstChild.className = 'fa fa-caret-down';
				docsMenuDropdown1.style.display = "none";
				docsMenuDropdown2.style.display = "none";
				docsMenuDropdown3.style.display = "none";
				docsMenuDropdown4.style.display = "none";
				docsMenuDropdown5.style.display = "block";
			}
		});
	}
}

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
	docsMenuItemTogglers();
	downloadMenuTogglers();
	htmlTag.classList.remove("overflow-hidden");
	if(docsMenu) {
		docsMenu.style.display = "block";
	}
} else {
	spinLoader();
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      closeLoader();
			htmlTag.classList.remove("overflow-hidden");
			docsMenuItemTogglers();
			downloadMenuTogglers();
			if(docsMenu) {
				docsMenu.style.display = "block";
			}
    }
  }
}
