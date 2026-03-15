// select button element
const button = document.querySelector("button");
const modal = document.querySelector("#modal");

// add event listener on click to button
// remove class invisible from div modal
button.addEventListener("click", () => {
	modal.classList.remove("invisible");

	setTimeout(() => {
		modal.classList.add("invisible");
	}, 5000);
});

// add event listener on key press Escape
// add class invisible to div modal
document.addEventListener("keyup", (event) => {
	if (event.key == "Escape") {
		modal.classList.add("invisible");
	}
});
