"use strict";

window.onload = () => {
	const emailInput = document.getElementById("email");
	const emailPlaceholder = document.getElementById("email-placeholder");

	emailInput.addEventListener("change", (e) => {
		if (emailInput.value) {
			emailPlaceholder.classList.add("placeholder--active");
		} else {
			emailPlaceholder.classList.remove("placeholder--active")
		}
	})

	const commentTextarea = document.getElementById("comment");
	const commentPlaceholder = document.getElementById("comment-placeholder");

	commentTextarea.addEventListener("change", (e) => {
		console.log(commentTextarea.value === "");
		if (commentTextarea.value !== "") {
			commentPlaceholder.classList.add("placeholder--active");
		} else {
			commentPlaceholder.classList.remove("placeholder--active")
		}
	})

};