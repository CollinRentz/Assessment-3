function handleMyFavoriteColor(evt) {
	evt.preventDefault();
	
	alert("Maroon");
}
function handleMyFavoriteRitual(evt) {
	evt.preventDefault();
	
	alert("Listeniing to Imagine Dragons daily.");
}
function handleMyFavoritePlace(evt) {
	evt.preventDefault();
	
	alert("Rural Washington State");
}

let button = document.querySelector('#contact');

button.addEventListener('My Favorite Place', handleMyFavoritePlace);
button.addEventListener('My Favorite Ritual', handleMyFavoriteRitual);
button.addEventListener('My Favorite Color', handleMyFavoriteColor);
