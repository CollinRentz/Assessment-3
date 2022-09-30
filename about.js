console.log("hello world");

object.addEventListener("mouseover", myScript);


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted!!");
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);