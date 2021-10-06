"use strict";

const headerBurgerBtn = document.getElementById("header-burger-btn");
const headerBurgerList = document.getElementById("header-burger-list")

headerBurgerBtn.addEventListener("click", (e) => {
	if (!headerBurgerList.style.display || headerBurgerList.style.display === "none") {
		headerBurgerList.style.display = "flex";
	}
	else {
		headerBurgerList.style.display = "none";
	}
});