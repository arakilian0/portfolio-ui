let formSubmitBtn = document.querySelector('#contactPageFormSubmitBtn');
let formName = document.querySelector('#contactPageFormName');
let formContact = document.querySelector('#contactPageFormContact');
let formMessage = document.querySelector('#contactPageFormMessage');
let form = document.querySelector('#contactPageForm');
let valMsg = document.querySelectorAll('.contact-form-val-msg');
let successMsg = document.querySelector('.success-message-container');
let successMsgCloser = document.querySelector('#successMsgCloser');

let post_url = "https://dev.arakilian0.com/contact";

successMsgCloser.addEventListener("click", function() {
	successMsg.style.display = 'none';
});

formSubmitBtn.addEventListener("click", function() {
	let params = `?name=${formName.value}&contact=${formContact.value}&message=${formMessage.value}`;
	var http = new XMLHttpRequest();
	http.open("POST", post_url+params);
	http.onload = function(event){
		let data = JSON.parse(event.target.response);
		// form success
		if(data.validation.status == "success") {
			form.reset();
			valMsg.forEach((idx) => {
				idx.style.display = "none";
			});
			successMsg.style.display = 'block';
			let url = location.href;
			location.href = "#success";
		}
		// form error
		else {
			valMsg.forEach((val) => {
				val.style.display = "block";
				// name validation handler
				if(val.previousElementSibling.id == "contactPageFormName") {
					if(data.validation.object[0].valid) { val.innerHTML = "" }
					else {
						console.log(data.validation.object[0]);
						if(!data.validation.object[0].min) {
							val.innerHTML = "Did not meet min requirement (3)";
						}
						if(!data.validation.object[0].max) {
							val.innerHTML = "Exceeded max allowed (25)";
						}
					}
				}
				// contact validation handler
				if(val.previousElementSibling.id == "contactPageFormContact") {
					if(data.validation.object[1].valid) { val.innerHTML = "" }
					else {
						console.log(data.validation.object[1]);
						if(!data.validation.object[1].email && !data.validation.object[1].phone) {
							val.innerHTML = "Email or phone number invalid";
						}
					}
				}
				// message validation handler
				if(val.previousElementSibling.id == "contactPageFormMessage") {
					if(data.validation.object[2].valid) { val.innerHTML = "" }
					else {
						console.log(data.validation.object[2]);
						if(!data.validation.object[2].min) {
							val.innerHTML = "Did not meet min requirement (10)";
						}
						if(!data.validation.object[2].max) {
							val.innerHTML = "Exceeded max allowed (255)";
						}
					}
				}
			});
		}
	};
	var formData = new FormData(form);
	http.send(form);
});
