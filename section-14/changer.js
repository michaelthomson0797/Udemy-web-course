var button = document.querySelector("button");
var body = document.querySelector("body");
var isBlue = false;
function changeColor() {
	if (!isBlue) {
		body.style.background = "blue";
	} else {
		body.style.background = "white";
	}
	isBlue = !isBlue;
}
button.addEventListener("click", changeColor);

