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
};